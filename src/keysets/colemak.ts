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

//> This needs to be calculated and sent to db at some point
export function getKeySet() {
  let val = 0;
  return keySet.map(key => {
    val += 7.5;
    return { letter: key, rating: val + 4, active: val % 3 === 0 };
  });
}
