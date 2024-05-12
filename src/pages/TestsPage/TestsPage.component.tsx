import { CaretUpOutlined, CaretDownOutlined, RetweetOutlined } from "@ant-design/icons";
import { TestsVariants } from "../../globalTypes";
import { Button, Card } from "antd";
import React, { FC } from "react";
import { styles } from "./styles";

interface ComponentProps {
  tests: any;
  startPlayMode: any;
  putEditMode: any;
  deleteTest: any;
  onChangeTestState: (testId: string) => void;
  randomWordsInTest: (testId: string) => void;
}

const TestsPageComponent: FC<ComponentProps> = (props) => {
  const { tests, startPlayMode, putEditMode, deleteTest } = props;
  const { onChangeTestState, randomWordsInTest } = props;

  return (
    <>
      <h2>Tests</h2>
      {tests.length > 0 &&
        tests.map((test: any) => (
          <Card
            key={test.id}
            title={test.name}
            size="default"
            style={styles.card}
          >
            <div style={styles.flexDiv}>
              <div style={styles.flexDirCol}>
                {test.statistic && (
                  <p style={styles.testInfoText}>Statistic - {test.statistic}%</p>
                )}
                {test.words != null && <p style={styles.testInfoText}>Words - {test.words.length}</p>}
              </div>
              <div>
                <Button onClick={() => randomWordsInTest(test.id)}>
                  <RetweetOutlined />
                </Button>
                <Button onClick={() => onChangeTestState(test.id)}>
                  {test.state === TestsVariants.READ ? (
                    <CaretUpOutlined />
                  ) : (
                    <CaretDownOutlined />
                  )}
                </Button>
              </div>
            </div>

            {test.words &&
              test.state === TestsVariants.READ &&
              test.words.map((word: any) => {
                return (
                  word != null && (
                    <div key={word.id} style={styles.testReadFlexDiv}>
                      <p style={styles.testReadEngWord}>{word.wordEng}</p>
                      <p style={styles.testReadTrans}>{word.wordTr}</p>
                    </div>
                  )
                );
              })}
            <div style={styles.bottomControllers}>
              <Button onClick={() => startPlayMode(test.id)}>Play</Button>
              <Button onClick={() => deleteTest(test.id)} disabled>
                Delete
              </Button>
              <Button onClick={() => putEditMode(test.id)}>Edit</Button>
            </div>
          </Card>
        ))}
    </>
  );
};

export default TestsPageComponent;
