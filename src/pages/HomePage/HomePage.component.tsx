import { FC } from 'react';
import styles from './homePage.module.scss';


interface ComponentProps {
  isShowLogin?: boolean,
  navigate: (v:string) => void,
}


const HomePageComponent: FC<ComponentProps> = (props) => {
  const { navigate} = props;

  
    return (
      <section>

        <button onClick={() => navigate("account")}>Account</button>
        <button onClick={() => navigate("tests")}>Tests</button>
      </section>
    );
};



export default HomePageComponent;