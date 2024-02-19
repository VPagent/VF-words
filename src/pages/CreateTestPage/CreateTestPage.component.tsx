import { FC, useState } from 'react';
import styles from './CreateTestPage.module.scss'
// import { Button, Dropdown, Flex } from "antd";
import { Button, Form, Input, Radio } from "antd";
import { ITest } from '../../globalTypes';

interface IPropsComponent {
  form: any;
  addNewTest: () => void;
  createTest: (e:any) => void;
}

const CreateTestPageComponent: FC<IPropsComponent> = (props) => {
    const { form, addNewTest, createTest } = props;

  return (
    <section>
      CreateTestComponent
      <Form
        layout={"horizontal"}
        form={form}
        initialValues={{ layout: "horizontal"}}
        onValuesChange={(e) => form.getFieldsValue()}
        // onSubmit={createTest}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Test name" name="name">
          <Input placeholder="Enter test name" />
        </Form.Item>
        <Form.Item>
                  <Button type="primary" onClick={createTest}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};



export default CreateTestPageComponent;