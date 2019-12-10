// 型を定義する

export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Talk = {
  id: number;
  content: string;
  timestamp: Date;
  user_id: number;
};
