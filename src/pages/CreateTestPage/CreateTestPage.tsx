import { FC } from "react";
import CreateTestPageComponent from "./CreateTestPage.component";
import useStorageContext from "../../hooks/storage";
import { Button, Form, Input, Radio } from "antd";
import { nanoid } from "nanoid";


const CreateTestPage: FC = () => {
  const { addNewTest }: any = useStorageContext();
  const [form] = Form.useForm();
  const { getFieldValue, resetFields } = form;

  const createTest = () => {
    const test = {
      name: getFieldValue("name"),
      id: nanoid(),
      words: [],
      wordsCount: null,
      statistic: null,
      variant: "word"
    };
    addNewTest(test);
    console.log(form.getFieldValue("name"))
    resetFields();
  }

  return (
    <CreateTestPageComponent
      addNewTest={addNewTest}
      form={form}
      createTest={createTest}
    />
  );
};

export default CreateTestPage;
