import { useEffect, useState } from "react";
import { LocalStorageKey } from "../globalTypes";
import { userTestInitial } from "../constans";
import { IUseLocalStorage } from "./types";


export const useLocalStorage = (): IUseLocalStorage => {
  const [userInfo, setUserInfo] = useState<any | null>(JSON.parse(localStorage.getItem(LocalStorageKey.USER) as any) || userTestInitial);

  useEffect(() => {
    localStorage.setItem(LocalStorageKey.USER, JSON.stringify(userInfo));
    
  }, [userInfo])

  const getStorageItem = (): any => {
    return userInfo;
  };

  const setStorageItem = (value: any) => {
    setUserInfo(value);
  };

  const methods = { userInfo, getStorageItem, setStorageItem };
  
  return methods;
};
