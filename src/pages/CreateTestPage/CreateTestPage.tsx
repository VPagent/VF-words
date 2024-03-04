import { FC, useState } from "react";
import CreateTestPageComponent from "./CreateTestPage.component";
import useStorageContext from "../../hooks/storage";
import { Button, Form, Input, Radio } from "antd";
import { nanoid } from "nanoid";
import { TestsVariants } from "../../globalTypes";


const CreateTestPage: FC = () => {
  const { addNewTest, tests }: any = useStorageContext();
  const [form] = Form.useForm();
  const { getFieldValue, resetFields, getFieldsValue } = form;

  const [wordFieldsCount, setWordFieldsCount] = useState<any[]>([1]);

  const createTest = () => {
    const allCurrentFields = getFieldsValue();
    const currentWords = wordFieldsCount.map((word, index) => {
      const test = `word${index + 1}`;
      const test2 = `wordTr${index + 1}`;

      const newWord = {
        id: nanoid(),
        wordEng: allCurrentFields[test],
        wordTr: allCurrentFields[test2]
      };
      return newWord;
    })

    currentWords.forEach((word) => {
      if (word == null) {
        return
      } else {
        return word
      }
    })

    const test = {
      name: getFieldValue("name"),
      id: nanoid(),
      words: currentWords,
      wordsCount: currentWords.length,
      statistic: null,
      variant: "word",
      state: TestsVariants.HIDDEN
    };
    addNewTest(test);
    resetFields();
  }

  const addWordField = () => {
    setWordFieldsCount([...wordFieldsCount, 1]);
  }

  return (
    <CreateTestPageComponent
      addNewTest={addNewTest}
      form={form}
      createTest={createTest}
      wordFieldsCount={wordFieldsCount}
      addWordField={addWordField}
    />
  );
};

export default CreateTestPage;
