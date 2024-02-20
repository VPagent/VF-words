import { ITest, TestsModes } from "../../../globalTypes";
import { Button, Form, Input, Radio } from "antd";
import { nanoid } from "nanoid";
import { FC, useMemo } from "react";

interface ComponentProps {
  whatsMode: { id: string | null; mode: TestsModes };
  form: any;
  currentTest: ITest | null;
  turnToReadMode: any;
  wordsCount: number[] | null;
  addNewWord: () => void;
  deleteTranslate: (id: string, value: string) => void;
  onSave: () => void;
}

const EditComponent: FC<ComponentProps> = (props) => {
  const { whatsMode, currentTest, form, turnToReadMode, wordsCount } = props;
  const { addNewWord, deleteTranslate, onSave } = props;
  const words = currentTest?.words;
  console.log("wordCount Lengt", wordsCount?.length, words?.length);
  return (
    <>
      <Button onClick={turnToReadMode}>{"<Back"}</Button>
      EditComponent
      <Form
        layout={"horizontal"}
        form={form}
        initialValues={{ layout: "horizontal" }}
        onValuesChange={() => {}}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label="Test name"
          name="name"
          initialValue={currentTest?.name}
        >
          <Input />
        </Form.Item>
        <p>
          <b>Words</b>
        </p>
              {words != null && words.map((word, index) => {
                  return word != null ?
                      (<>
                          <Form.Item
                              label={`Word ${index + 1}`}
                              name={`word${index + 1}`}
                              key={word.id}
                              initialValue={word.wordEng}
                          >
                              <Input />
                          </Form.Item>
                          <Form.Item
                              label="Transalions"
                              name={`wordTr${index + 1}`}
                              key={word.wordTr}
                              initialValue={word.wordTr}
                          >
                              <Input onChange={(e) => console.log(e)} />
                          </Form.Item>
                          {/* <Button onClick={() => {}}>del</Button> */}
                      </>) : <></>
              })}
        {wordsCount != null &&
          wordsCount.map((item, index) => (
            <>
              <Form.Item
                label={`Word ${words?.length && words?.length + index + 1}`}
                name={`word${words?.length && words?.length + index + 1}`}
                key={nanoid()}
              >
                <Input placeholder="Enter a new Word" />
              </Form.Item>
              <Form.Item
                label="Transalions"
                name={`wordTr${words?.length && words?.length + index + 1}`}
                key={nanoid()}
              >
                <Input placeholder="Enter a translations" />
              </Form.Item>
              {/* <Button onClick={() => {}}>del</Button> */}
            </>
          ))}

        <Form.Item>
          <Button type="primary" onClick={addNewWord}>
            add Word
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={onSave}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditComponent;
