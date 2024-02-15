import { FC } from 'react';
import styles from './homePage.module.scss';
import LoginBox from '../../components/LoginBox';


interface ComponentProps {
  isShowLogin: boolean,
  navigate: (v:string) => void,
}


const HomePageComponent: FC<ComponentProps> = (props) => {
  const { isShowLogin, navigate} = props;

  

    return (
      <section>
        {isShowLogin && <LoginBox />}
        <button onClick={() => navigate("account")}>Account</button>
        <button onClick={() => navigate("tests")}>Tests</button>
      </section>
    );
};



export default HomePageComponent;