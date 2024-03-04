import EditComponent from "./components/Edit/Edit.component";
import TestsPageComponent from "./TestsPage.component";
import useStorageContext from "../../hooks/storage";
import PlayPage from "./components/Play/PlayPage";
import { TestsModes, TestsVariants } from "../../globalTypes";
import { FC, useState } from "react";
import { nanoid } from "nanoid";
import { Form } from "antd";


const TestsPage: FC = () => {
  const [whatsMode, setWhatsMode] = useState<{ id: string | null, mode: TestsModes }>({ id: null, mode: TestsModes.READ });
  const { tests, setTests, setNewStatistic } = useStorageContext();
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

  // const scrollToBottom = () => {
  //   //@ts-ignore
  //   // document.body.scrollIntoView({ behavior: 'smooth' });
  //   root.scrollIntoView({ behavior: "smooth" });
  //   console.dir(document);
  // }

  const onChangeTestState = (testId:string) => {
    const newTests = tests.map((test) => {
      if (test.id === testId) {
        return {
          ...test,
          state: test.state === TestsVariants.HIDDEN ? TestsVariants.READ : TestsVariants.HIDDEN
        }
      } else {
        return test
      }
    })

    setTests(newTests);
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
    // scrollToBottom();
  }

  const onSave = () => {
    const allValues = getFieldsValue();

    if (currentTest?.words.length != null) {
      //@ts-ignore
      const arrayCounter = new Array(currentTest.words.length + (wordsCount?.length ? wordsCount?.length : 0)).fill(1);
      const newWords = arrayCounter?.map((item, index) => {

        const test1 = `word${index + 1}`;
        const test2 = `wordTr${index + 1}`;
   
          return {
            id: nanoid(),
            wordEng: allValues[test1],
            wordTr: allValues[test2]
          };

      });

      const nextWords = newWords.filter((word) => {
        return word.wordEng != null
      });

      const nextTest = {
        ...currentTest,
        name: allValues.name,
        words: nextWords,
        state: currentTest.state != null ? currentTest.state : TestsVariants.HIDDEN
      };

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
            deleteTest,
            onChangeTestState
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
            onSave,
          }}
        />
      )}
      {whatsMode.mode === TestsModes.PLAY && currentTest != null && (
        <PlayPage
          {...{ whatsMode, currentTest, turnToReadMode, setNewStatistic }}
        />
      )}
    </>
  );
};

export default TestsPage;
