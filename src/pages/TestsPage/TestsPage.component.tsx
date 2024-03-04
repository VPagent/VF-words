import React, { FC } from 'react'
import styles from './TestsPage.module.scss'
import { Button, Form, Input, Radio, Card, Space } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { TestsVariants } from '../../globalTypes';


interface ComponentProps {
  tests: any;
  whatsMode: any;
  startPlayMode: any;
  stopPlayMode: any;
  putEditMode: any;
  deleteTest: any;
  onChangeTestState: (testId: string) => void;
}

const TestsPageComponent: FC<ComponentProps> = (props) => {
    const { tests, whatsMode, startPlayMode, stopPlayMode, putEditMode , deleteTest, onChangeTestState } = props;
    return (
      <>
        TEst page Component
        {tests.length > 0 &&
          tests.map((test: any) => (
            <Card key={test.id} title={test.name} size="default">
              <Button onClick={() => onChangeTestState(test.id)}>
                {test.state === TestsVariants.READ ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </Button>

              {test.statistic && <p>statistic - {test.statistic}%</p>}
              {test.words &&
                test.state === TestsVariants.READ &&
                test.words.map((word: any) => {
                  return (
                    word != null && (
                      <div key={word.id}>
                        <p>
                          <b>{word.wordEng}</b> --
                          <span>{word.wordTr}</span>
                        </p>
                      </div>
                    )
                  );
                })}
              <Button onClick={() => startPlayMode(test.id)}>Play</Button>
              <Button onClick={() => deleteTest(test.id)} disabled>Delete</Button>
              <Button onClick={() => putEditMode(test.id)}>Edit</Button>
            </Card>
          ))}
      </>
    );
};


export default TestsPageComponent;