import { FC, useEffect, useState } from 'react';
import HomePageComponent from './HomePage.component';
import { useNavigate } from 'react-router';
import useStorageContext from '../../hooks/storage';


const HomePagePage: FC = () => {
    
    const [isShowLogin, setIsShowLogin] = useState<boolean>(false);

    const { userName, password, changeUserName }:any = useStorageContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (userName == null || password == null) {
            setIsShowLogin(true);
        } 

    }, [userName])

    return <HomePageComponent isShowLogin={isShowLogin} navigate={navigate} />;
}




export default HomePagePage;