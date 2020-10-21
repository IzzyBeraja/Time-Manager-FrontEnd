type Passage = {
  id: number;
  author: string;
  title: string;
  text: string;
  contributor: string;
};

// >> Check what happens when messages have both double and single quotes from db
const tests: Passage[] = [
  {
    id: 1,
    title: "BioShock Infinite",
    author: "2k",
    text:
      "Comstock says all this trouble, all this strife, is on our heads. Says we're to blame. Says ain't nobody got nothing to complain about, and if it's not fine for you and yours, that's 'cause you a backslider and you've fallen into sin.",
    contributor: "Izzy Beraja",
  },
  {
    id: 2,
    title: "Shrek",
    author: "directed by Andrew Adamson",
    text:
      "Ha, ha! That's right, fool! Now I'm a flying, talking donkey. You might have seen a housefly, maybe even a superfly but I bet you ain't never seen a donkey fly. Ha, ha!",
    contributor: "Izzy Beraja",
  },
  {
    id: 3,
    title: "Alice's Adventures in Wonderland",
    author: "by Lewis Carroll",
    text:
      "If I had a world of my own, everything would be nonsense. Nothing would be what it is because everything would be what it isn't. And contrary-wise; what it is it wouldn't be, and what it wouldn't be, it would. You see?",
    contributor: "Izzy Beraja",
  },
  {
    id: 4,
    title: "The Godfather: Part II",
    author: "directed by Francis Ford Coppola",
    text:
      "You know when I was your age, I went out to fishing with all my brothers and my father, and everybody. And I was the only one who caught a fish.",
    contributor: "Izzy Beraja",
  },
  {
    id: 5,
    title: "Shrek",
    author: "Directed by Andrew Adamson",
    text:
      "Ha, ha! That's right, fool! Now I'm a flying, talking donkey. You might have seen a housefly, maybe even a superfly but I bet you ain't never seen a donkey fly. Ha, ha!",
    contributor: "Izzy Beraja",
  },
  {
    id: 6,
    title: "Leaves of Grass",
    author: "by Walt Whitman",
    text:
      "I see something of God each hour of the twenty-four, and each moment then, in the faces of men and women I see God, and in my own face in the glass; I find letters from God dropped in the street, and every one is signed by God's name, and I leave them where they are, for I know that others will punctually come forever and ever.",
    contributor: "Izzy Beraja",
  },
  {
    id: 7,
    title: "The Thermodynamics of Pizza",
    author: "by Harold J. Morowitz",
    text:
      "The melted mozzarella layer, which we shall designate MML, is the obvious source of trauma to the roof of the mouth and from the point of view of medical physics is clearly the key agent in the etiology of pizza burn.",
    contributor: "Izzy Beraja",
  },
  {
    id: 8,
    title: "Way of the Peaceful Warrior",
    author: "by Dan Millman",
    text:
      "The brain can be a tool. It can recall phone numbers, solve math puzzles, or create poetry. In this way, it works for the rest of the body, like a tractor. But when you can't stop thinking of that math problem or phone number, or when troubling thoughts and memories arise without your intent, it's not your brain working, but your mind wandering. Then the mind controls you; then the tractor has run wild.",
    contributor: "Izzy Beraja",
  },
  {
    id: 9,
    title: "The Adventures of Sherlock Holmes",
    author: "by Sir Arthur Conan Doyle",
    text:
      "They are important, you understand, without being interesting. Indeed, I have found that it is usually in unimportant matters that there is a field for the observation, and for the quick analysis of cause and effect which gives the charm to an investigation. The larger crimes are apt to be the simpler, for the bigger the crime the more obvious, as a rule, is the motive.",
    contributor: "Izzy Beraja",
  },
  {
    id: 10,
    title: "The Winner Takes It All",
    author: "by ABBA",
    text:
      "The gods may throw a dice, their minds as cold as ice. And someone way down here loses someone dear. The winner takes it all, the loser has to fall. It's simple and it's plain, why should I complain?",
    contributor: "Izzy Beraja",
  },
];

const getTest = () => {
  const id = Math.floor(Math.random() * tests.length);
  return tests[id];
};

const getTestById = (id: number) => {
  const test = tests.filter(t => t.id === id)[0];
  return test;
};

export { getTest, getTestById };
