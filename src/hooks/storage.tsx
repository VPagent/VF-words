import { createContext, useContext, useEffect, useState } from "react";
import{ useLocalStorage }from "./localStorage";
import { userTestInitial } from "../constans";




const StorageContext:any = createContext(userTestInitial);

export const StorageProvider = ({children}:any) => {
    const [userName, setUserName] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);


    const { userInfo, setStorageItem } = useLocalStorage();

    useEffect(() => {
        
    }, [userName, setUserName]);

    const changeUserName = (name: string) => {
        if (name != null) {
            setUserName(name);
            setStorageItem({...userInfo, userName: name})
        }
    }
    const values = {
        userName,
        password,
        changeUserName
    }
    return <StorageContext.Provider value={values}>
        {children}
    </StorageContext.Provider>

}

const useStorageContext = () => {
    return useContext(StorageContext);
}

export default useStorageContext;
