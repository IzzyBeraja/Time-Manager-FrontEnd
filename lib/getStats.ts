import { Stat } from "types";

export const getAllStats = () => {
  if (typeof window !== "undefined") {
    const allStatNames = localStorage.getItem("statNames")?.split("|");
    const allStats: Stat[] =
      allStatNames?.map(name => {
        const stat: Stat = {
          key: name,
          value: JSON.parse(localStorage.getItem(name) ?? ""),
        };
        return stat;
      }) ?? [];
    return allStats;
  }
  return [];
};

export const saveAllStats = (stats: Stat[]) => {
  const allNames: string[] = [];
  stats.forEach(({ key: name, value }) => {
    allNames.push(name);
    localStorage.setItem(name, JSON.stringify(value));
  });
  localStorage.setItem("statNames", allNames.join("|"));
};

/*
  "speed",
  "dSpeed",
  "accuracy",
  "dAccuracy",
  "score",
  "dScore",
  "time",
  "textLength",
*/
