export type AnswerTypes = "+" | "-";

export type Stat = {
  key: string;
  value: {
    label: string;
    value: number;
    delta: number;
    precision?: number;
    isPercent?: boolean;
  };
};

export type Key = {
  letter: string;
  rating: number;
  active: boolean;
};

export type GuageData = {
  key: string;
  label: string;
  value: number;
  delta: number;
  precision?: number;
  isPercent?: boolean;
};

export type TestResults = {
  answers: AnswerTypes[];
  startTime: number;
  endTime: number;
};
