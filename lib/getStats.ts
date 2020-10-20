import { Stat } from "types";

export const initialStats: Stat[] = [
  {
    key: "speed",
    value: {
      visual: { label: "Speed: ", precision: 1 },
      data: { value: 0, delta: 0 },
    },
  },
  {
    key: "accuracy",
    value: {
      visual: { label: "Accuracy: ", precision: 2 },
      data: { value: 0, delta: 0, isPercent: true },
    },
  },
  {
    key: "score",
    value: {
      visual: { label: "Score: " },
      data: { value: 0, delta: 0 },
    },
  },
];

export const getAllStats = () => {
  //? Client only
  if (typeof window !== "undefined") {
    const allStats: Stat[] = initialStats.map(({ key, value }) => {
      const val = localStorage.getItem(key);
      return {
        key,
        value: val ? JSON.parse(val) : value,
      };
    });
    return allStats;
  }
  return [];
};

export const saveAllStats = (arr: { key: string; value: number }[]) => {
  //* Read data from local storage
  const recentStats = getAllStats();

  //* Match fields and calculate deltas
  const newStats: Stat[] = recentStats.map(({ key, value }) => {
    const newValue = arr.find(v => v.key === key)?.value || 0;
    const newDelta = newValue - value.data.value;
    return {
      key,
      value: {
        visual: value.visual,
        data: {
          value: newValue,
          delta: newDelta,
          isPercent: value.data.isPercent,
        },
      },
    };
  });

  //* Store data to localstorage
  newStats.forEach(({ key, value }) =>
    localStorage.setItem(key, JSON.stringify(value))
  );
};
