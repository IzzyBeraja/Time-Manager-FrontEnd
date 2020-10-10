export type AnswerTypes = "+" | "-";

export type Stats = {
  speed: number;
  speedChange: number;
  accuracy: number;
  accuracyChange: number;
  score: number;
  scoreChange: number;
  time: number;
  textLength: number;
};

export type Key = {
  letter: string;
  rating: number;
  active: boolean;
};
