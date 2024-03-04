import { FC, useEffect, useState } from "react";
import { Button } from "antd";
import { firstSymbolFormatter } from "../../../../utils/utils";
import _ from "lodash";


interface ComponentProps {
  wordEng: string;
  allTranslationsToDisplay: string[];
  turnToReadMode: () => void;
  onTransClick: (x: string)=> void;
}

const PlayComponent: FC<ComponentProps> = (props) => {
  const { wordEng, allTranslationsToDisplay } = props;
  const { turnToReadMode, onTransClick } = props;

  
    return (
      <>
        <Button onClick={turnToReadMode}>{"<Back"}</Button>
        PlayComponent
        <br></br>
        <br></br>
        <br></br>
        <div>
          <span>
            <b>{firstSymbolFormatter(wordEng)}</b>
            <br></br>
            <br></br>

            {allTranslationsToDisplay != null &&
              allTranslationsToDisplay.map((trans, index) => (
                <>
                <Button key={index + 1} onClick={() => onTransClick(trans)}>
                  {trans}
                </Button>
                {" "}
                </>
              ))}
          </span>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </>
    );
};


export default PlayComponent