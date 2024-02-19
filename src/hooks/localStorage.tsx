import { useEffect, useState } from "react";
import { LocalStorageKey } from "../globalTypes";
import { userTestInitial } from "../constans";
import { IUseLocalStorage } from "./types";


export const useLocalStorage = (): IUseLocalStorage => {
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageKey.USER) == null) {
      localStorage.setItem(
        LocalStorageKey.USER,
        JSON.stringify(userTestInitial)
      );
      return;
    }
    if (userInfo != null) {
      console.log("wright");
      localStorage.setItem(LocalStorageKey.USER, JSON.stringify(userInfo));
      return;
    }
  }, [userInfo, setUserInfo]);

  const getStorageItem = (): any => {
    return userInfo;
  };

  const setStorageItem = (value: any) => {
    setUserInfo(value);
  };

  const methods = { userInfo, getStorageItem, setStorageItem };
  
  return methods;
};
