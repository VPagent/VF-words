import { createContext, useContext, useEffect, useState } from "react";
import{ useLocalStorage }from "./localStorage";
import { userTestInitial } from "../constans";
import { ITest } from "../globalTypes";




const StorageContext = createContext(userTestInitial);

export const StorageProvider: any = ({ children }: any) => {

    const { userInfo, setStorageItem } = useLocalStorage();

  const [userName, setUserName] = useState<string | null>(userInfo?.userName || null);
  const [password, setPassword] = useState<string | null>(userInfo?.password || null);
  const [tests, setTests] = useState<ITest[] | null>(userInfo?.tests || null);
  const [words, setWords] = useState<any[] | null>(userInfo?.words || null);
  const [theme, setTheme] = useState<string>(userInfo?.theme);
    

  const user = {
    userName,
    password,
    tests,
    testCount: tests?.length,
    wordsCount: words?.length,
    theme: theme
  };


    useEffect(() => {
        if (userInfo?.userName == null) {
            setStorageItem(user);
      }
  }, [userName, password, tests, words, theme]);

  const changeUserName = (name: string) => {
    if (name != null) {
      setUserName(name);
      setStorageItem({ ...userInfo, userName: name });
    }
  };

  const addNewTest = (test: ITest) => {
    if (tests !== null) {
      setTests([...tests, test]);
    } else {
      setTests([test]);
    }
  };
  const values = {
    userName,
    password,
    changeUserName,
    addNewTest
  };
    return (
      //@ts-ignore
      <StorageContext.Provider value={values}>{children}</StorageContext.Provider>
  );
};

const useStorageContext = () => {
    return useContext(StorageContext);
}

export default useStorageContext;
