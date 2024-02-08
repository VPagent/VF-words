import { FC, useState } from 'react';
import HomePageComponent from './HomePage.component';


const HomePagePage: FC = () => {
    
    const [isShowLogin, setIsShowLogin] = useState<boolean>(false);

    return <HomePageComponent isShowLogin={isShowLogin} />;
}




export default HomePagePage;