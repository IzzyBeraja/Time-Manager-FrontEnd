const keySet: string[] = [
  "E",
  "N",
  "I",
  "T",
  "R",
  "L",
  "S",
  "A",
  "U",
  "O",
  "D",
  "Y",
  "C",
  "H",
  "G",
  "M",
  "P",
  "B",
  "K",
  "V",
  "W",
  "F",
  "Z",
  "X",
  "Q",
  "J",
];

export function getKeySet() {
  return keySet.map(key => {
    return { letter: key, rating: Math.random() * 101, active: true };
  });
}
