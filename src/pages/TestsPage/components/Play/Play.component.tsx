import { firstSymbolFormatter } from "../../../../utils/utils";
import { LeftOutlined } from "@ant-design/icons";
import { FC } from "react";
import { styles } from "../../styles";
import { Button } from "antd";
import _ from "lodash";
import { PlayVariants } from "../../../../globalTypes";

interface ComponentProps {
  wordEng: string;
  variant: PlayVariants | null;
  allTranslationsToDisplay: string[];
  turnToReadMode: () => void;
  onTransClick: (x: string) => void;
  onChangePlayVariant: (event:any) => void;
}

const PlayComponent: FC<ComponentProps> = (props) => {
  const { wordEng, allTranslationsToDisplay, variant } = props;
  const { turnToReadMode, onTransClick, onChangePlayVariant } = props;

  return (
    <>
      {!variant && (
        <>
          <Button onClick={onChangePlayVariant} name={PlayVariants.ENGTOOTHER}>
            English to Other
          </Button>
          <Button onClick={onChangePlayVariant} name={PlayVariants.OTHERTOENG}>
            Other to English
          </Button>
          <Button onClick={turnToReadMode}>
            <LeftOutlined />
          </Button>
        </>
      )}
      {variant === PlayVariants.ENGTOOTHER && (
        <>
          <Button onClick={turnToReadMode}>
            <LeftOutlined />
          </Button>
          <h1>Play Mode</h1>
          <div>
            <h2 style={styles.mainEngWord}>{firstSymbolFormatter(wordEng)}</h2>

            {allTranslationsToDisplay != null &&
              allTranslationsToDisplay.map((trans, index) => (
                <Button
                  style={styles.translationsText}
                  key={index + 1 + trans}
                  onClick={() => onTransClick(trans)}
                  size="large"
                >
                  {trans}
                </Button>
              ))}
          </div>
        </>
      )}
      {variant === PlayVariants.OTHERTOENG && (
        <>
          <Button onClick={turnToReadMode}>
            <LeftOutlined />
          </Button>
          <h1>Play Mode</h1>
          <div>
            <h2 style={styles.mainEngWord}>{firstSymbolFormatter(wordEng)}</h2>

            {allTranslationsToDisplay != null &&
              allTranslationsToDisplay.map((trans, index) => (
                <Button
                  style={styles.translationsText}
                  key={index + 1 + trans}
                  onClick={() => onTransClick(trans)}
                  size="large"
                >
                  {trans}
                </Button>
              ))}
          </div>
        </>
      )}
    </>
  );
};

export default PlayComponent;
