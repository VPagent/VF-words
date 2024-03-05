import { firstSymbolFormatter } from "../../../../utils/utils";
import { LeftOutlined } from "@ant-design/icons";
import { FC } from "react";
import { styles } from "../../styles";
import { Button } from "antd";
import _ from "lodash";

interface ComponentProps {
  wordEng: string;
  allTranslationsToDisplay: string[];
  turnToReadMode: () => void;
  onTransClick: (x: string) => void;
}

const PlayComponent: FC<ComponentProps> = (props) => {
  const { wordEng, allTranslationsToDisplay } = props;
  const { turnToReadMode, onTransClick } = props;

  return (
    <>
      <Button onClick={turnToReadMode}><LeftOutlined /></Button>
      <h1>Play Mode</h1> 
      <div>
        <h2 style={styles.mainEngWord}>{firstSymbolFormatter(wordEng)}</h2>

        {allTranslationsToDisplay != null &&
          allTranslationsToDisplay.map((trans, index) => (

              <Button style={styles.translationsText} key={index + 1 + trans} onClick={() => onTransClick(trans)} size="large">
                {trans}
              </Button>
          ))}
      </div>
    </>
  );
};

export default PlayComponent;
