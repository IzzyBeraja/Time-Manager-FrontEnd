export type AnswerTypes = "+" | "-";

export type Stat = {
  key: string;
  value: {
    visual: Visual;
    data: Statistic;
  };
};

export type Visual = {
  precision?: number;
  label: string;
};

export type Statistic = {
  value: number;
  delta: number;
  isPercent?: boolean;
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
