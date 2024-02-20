import { createContext, useContext, useEffect, useState } from "react";
import{ useLocalStorage }from "./localStorage";
import { userTestInitial } from "../constans";
import { ITest } from "../globalTypes";


interface IValues {
  userName: string | null;
  password: string | null;
  tests: ITest[] | [];
  changeUserName: (name:string) => void;
  addNewTest: (test:ITest) => void;
  setTests: (tests:ITest[]) => void;
};

const inValues: IValues = {
  userName: null,
  password: null,
  tests: [],
  changeUserName: () => {},
  addNewTest: () => {},
  setTests: () => {}
};

const StorageContext = createContext(inValues);

export const StorageProvider: any = ({ children }: any) => {

    const { userInfo, setStorageItem } = useLocalStorage();

  const [userName, setUserName] = useState<string | null>(userInfo?.userName || null);
  const [password, setPassword] = useState<string | null>(userInfo?.password || null);
  const [tests, setTests] = useState<ITest[] | []>(userInfo?.tests || []);
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
    setStorageItem(user);

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
    tests,
    changeUserName,
    addNewTest,
    setTests
  };
    return (
      <StorageContext.Provider value={values}>{children}</StorageContext.Provider>
  );
};

const useStorageContext = () => {
    return useContext(StorageContext);
}

export default useStorageContext;
