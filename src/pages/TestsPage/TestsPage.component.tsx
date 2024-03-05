import React, { FC } from "react";
import { styles } from "./styles";
import { Button, Card } from "antd";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { TestsVariants } from "../../globalTypes";

interface ComponentProps {
  tests: any;
  startPlayMode: any;
  putEditMode: any;
  deleteTest: any;
  onChangeTestState: (testId: string) => void;
}

const TestsPageComponent: FC<ComponentProps> = (props) => {
  const { tests, startPlayMode, putEditMode, deleteTest, onChangeTestState } =
    props;
  return (
    <>
      <h2>Tests</h2>
      {tests.length > 0 &&
        tests.map((test: any) => (
          <Card key={test.id} title={test.name} size="default" style={styles.card}>
            <div style={styles.flexDiv}>
              {test.statistic && <p>Statistic - {test.statistic}%</p>}
              {test.words != null && <p>Words - {test.words.length}</p>}
              <Button onClick={() => onChangeTestState(test.id)}>
                {test.state === TestsVariants.READ ? (
                  <CaretUpOutlined />
                ) : (
                  <CaretDownOutlined />
                )}
              </Button>
            </div>

            {test.words &&
              test.state === TestsVariants.READ &&
              test.words.map((word: any) => {
                return (
                  word != null && (
                    <div key={word.id} style={styles.testReadFlexDiv}>
                      <p style={styles.testReadEngWord}>{word.wordEng} -- </p>
                      <p style={styles.testReadTrans}>{word.wordTr}</p>
                    </div>
                  )
                );
              })}
            <Button onClick={() => startPlayMode(test.id)}>Play</Button>
            <Button onClick={() => deleteTest(test.id)} disabled>
              Delete
            </Button>
            <Button onClick={() => putEditMode(test.id)}>Edit</Button>
          </Card>
        ))}
    </>
  );
};

export default TestsPageComponent;
