import { FC, useState } from 'react';
import styles from './CreateTestPage.module.scss'
// import { Button, Dropdown, Flex } from "antd";
import { Button, Form, Input, Radio } from "antd";
import { ITest } from '../../globalTypes';

interface IPropsComponent {
  form: any;
  wordFieldsCount: any[];
  addNewTest: () => void;
  createTest: (e: any) => void;
  addWordField: () => void;
}

const CreateTestPageComponent: FC<IPropsComponent> = (props) => {
    const { form, wordFieldsCount, createTest, addWordField } = props;

  return (
    <section>
      CreateTestComponent
      <Form
        layout={"horizontal"}
        form={form}
        initialValues={{ layout: "horizontal" }}
        onValuesChange={(e) => form.getFieldsValue()}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Test name" name="name">
          <Input placeholder="Enter test name" />
        </Form.Item>
        {wordFieldsCount &&
          wordFieldsCount.map((word, wordIndex) => (
            <>
              <Form.Item
                key={wordIndex + "w"}
                label={`Word ${wordIndex + 1}`}
                name={`word${wordIndex + 1}`}
              >
                <Input key={wordIndex + "I"} placeholder="Enter word ENG" />
              </Form.Item>
              <Form.Item
                key={wordIndex + "t"}
                label={`Translations ${wordIndex + 1}`}
                name={`wordTr${wordIndex + 1}`}
              >
                <Input placeholder="Enter word translation" />
              </Form.Item>
            </>
          ))}
        <Form.Item>
          <Button type="primary" onClick={addWordField}>
            add Word
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={createTest}>
            Create
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};



export default CreateTestPageComponent;