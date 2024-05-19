export type NewRecord = {
  date: string;
  income: number;
  outcome: number;
  comment: string;
};

export type Record = NewRecord & {
  id: string;
};
