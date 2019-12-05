// 型を定義する

type User = {
  id: number;
  name: string;
  avatar: string;
};

type Talk = {
  id: number;
  content: string;
  timestamp: Date;
  user_id: number;
};
