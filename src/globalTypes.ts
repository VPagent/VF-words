

export enum LocalStorageKey {
    USER = "user"
}

export interface ITest {
  name: string;
  id: string;
  words: any[];
  wordsCount?: number;
  statistic?: any;
  variant?: string;
}

export enum TestsModes {
  EDIT = "edit",
  PLAY = "play",
  READ = "read"
}