import { ITest } from "../globalTypes";


export interface IUseLocalStorage {
  userInfo: any;
  getStorageItem: () => any;
  setStorageItem: (v: any) => void;
}

export interface IUseStorage {
  userName: string;
  password: string;
  changeUserName: (x: string) => void;
  addNewTest: (x: ITest) => void;
}


