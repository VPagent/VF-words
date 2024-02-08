import { FC } from 'react';
import styles from './homePage.module.scss';
import LoginBox from '../../components/LoginBox';


interface ComponentProps {
    isShowLogin: boolean
}


const HomePageComponent: FC<ComponentProps> = (props) => {
  const { isShowLogin } = props;

    return <section>
        {isShowLogin && <LoginBox />}
        
  </section>;
};



export default HomePageComponent;