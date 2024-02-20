import { FC, useState } from "react";
import TestsPageComponent from "./TestsPage.component";
import useStorageContext from "../../hooks/storage";
import { TestsModes } from "../../globalTypes";
import EditComponent from "./components/Edit.component";
import PlayComponent from "./components/Play.component";
import { Form } from "antd";
import { nanoid } from "nanoid";



const TestsPage: FC = () => {
  const [whatsMode, setWhatsMode] = useState<{ id: string | null, mode: TestsModes }>({ id: null, mode: TestsModes.READ });
  const { tests, setTests } = useStorageContext();
  const [form] = Form.useForm();
  const { getFieldsValue, resetFields } = form;
  const currentTest = whatsMode.id != null ? tests.find((test) => test.id === whatsMode.id ? test : null) : null;
  const [wordsCount, setWordsCount] = useState<number[] | null>(null);



  const startPlayMode = (id:string) => {
    setWhatsMode({ id: id, mode: TestsModes.PLAY });
  }

  const stopPlayMode = () => {
    setWhatsMode({ id: null, mode: TestsModes.READ });
  }

  const putEditMode = (id: string) => {
    setWhatsMode({ id: id, mode: TestsModes.EDIT });
  };

  const deleteTest = (id: string) => {
    if (tests && tests.length > 0) {
      const deletedTests = tests.filter((test) => test.id !== id);
      setTests(deletedTests);
      
    }
  }

  const turnToReadMode = () => {
    setWhatsMode({id: null, mode:TestsModes.READ})
  }

  const deleteTranslate = (id: string, trans: string) => {
    if (currentTest != null) {
      const currentWord = currentTest.words.find((word) => word.id === id);
      const deletedTranses = currentWord.wordTr.filter((tr: string) => tr !== trans);
      const nextWords = currentTest.words.filter((word) => word.id !== id);
      const nextWord = { ...currentWord, wordTr: deletedTranses };
      const nextTest = { ...currentTest, words: [...nextWords, nextWord] };
      const filteredTests = tests.filter((test) => test.id !== currentTest.id);
      const result = [...filteredTests, nextTest];

      setTests(result);
    }
  }

  const addNewWord = () => {
    if (wordsCount != null) {
      setWordsCount([...wordsCount, 1])
    } else {
      setWordsCount([1]);
    }
  }

  const onSave = () => {
    const allValues = getFieldsValue();

    if (currentTest?.words.length != null) {
      //@ts-ignore
      const arrayCounter = new Array(currentTest.words.length + (wordsCount?.length ? wordsCount?.length : 0)).fill(1);
      const newWords = arrayCounter?.map((item, index) => {
        const test1 = `word${index + 1}`;
        const test2 = `wordTr${index + 1}`;
        
        if (allValues[test1] != null && allValues[test2] != null) {
          
          const newWord = {
            id: nanoid(),
            wordEng: allValues[test1],
            wordTr: allValues[test2]
          };
          return newWord;
        } else {
          return null;
        }
      });

      const nextTest = {
        ...currentTest,
        name: allValues.name,
        words: newWords
      }

      const filteredTests = tests.filter((test) => test.id !== currentTest.id);
      const result = [...filteredTests, nextTest];
      setTests(result);

      setWordsCount(null);
      resetFields();
      turnToReadMode();

      
    }
  }

  return (
    <>
      {whatsMode.mode === TestsModes.READ && (
        <TestsPageComponent
          {...{
            tests,
            whatsMode,
            startPlayMode,
            stopPlayMode,
            putEditMode,
            deleteTest
          }}
        />
      )}
      {whatsMode.mode === TestsModes.EDIT && currentTest != null && (
        <EditComponent
          {...{
            whatsMode,
            currentTest,
            form,
            turnToReadMode,
            getFieldsValue,
            deleteTranslate,
            wordsCount,
            addNewWord,
            onSave
          }}
        />
      )}
      {whatsMode.mode === TestsModes.PLAY && currentTest != null && (
        <PlayComponent {...{ whatsMode, currentTest, turnToReadMode }} />
      )}
    </>
  );
};

export default TestsPage;
