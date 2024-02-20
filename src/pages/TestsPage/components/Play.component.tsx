import { FC } from "react";
import { ITest, TestsModes } from "../../../globalTypes";
import { Button, Form, Input, Radio } from "antd";




interface ComponentProps {
  whatsMode: { id: string | null; mode: TestsModes };
    currentTest: ITest | null;
  turnToReadMode: any;
}

const PlayComponent: FC<ComponentProps> = (props) => {
    const { whatsMode, currentTest, turnToReadMode } = props;

    return (
      <>
        <Button onClick={turnToReadMode}>{"<Back"}</Button>
        PlayComponent
      </>
    );
};


export default PlayComponent