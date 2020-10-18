import React, { useEffect, useState } from "react";
import { getKeySet } from "keysets/colemak";
import TypeTest from "components/TypeTest";
import ReactMarkdown from "react-markdown";

import { Stats, TestResults } from "types";
import { getTest } from "services/TypeTestService";
import ComponentWithNav from "components/Home";
import { getMarkdownByName, Markdown } from "../lib/markdown";
import { GetStaticProps } from "next";

type Props = {
  markdown: string;
};

const Practice = ({ markdown }: Props) => {
  const [text, setText] = useState("");
  const [keySet, setKeySet] = useState(getKeySet());
  const [stats, setStats] = useState<Stats>({
    speed: 0,
    speedChange: 0,
    accuracy: 0,
    accuracyChange: 0,
    score: 0,
    scoreChange: 0,
    time: 0,
    textLength: 0,
  });

  useEffect(() => {
    const statsFromStorage = getStats();
    setStats(statsFromStorage);
    setText(getTest().text);
    setKeySet(getKeySet());
  }, []);

  const handleTestFinish = (results: TestResults) => {
    const stats = getStatsForRace(results);
    storeStats(stats);
    setStats(stats);
    setText(getTest().text);
    setKeySet(getKeySet());
    console.log(stats);
  };

  const storeStats = (stats: Stats) => {
    localStorage.setItem("speed", stats.speed.toString());
    localStorage.setItem("dSpeed", stats.speedChange.toString());
    localStorage.setItem("accuracy", stats.accuracy.toString());
    localStorage.setItem("dAccuracy", stats.accuracyChange.toString());
    localStorage.setItem("score", stats.score.toString());
    localStorage.setItem("dScore", stats.scoreChange.toString());
    localStorage.setItem("time", stats.time.toString());
    localStorage.setItem("textLength", stats.time.toString());
  };

  const getStats = () => {
    const stats: Stats = {
      speed: Number(localStorage.getItem("speed")),
      speedChange: Number(localStorage.getItem("dSpeed")),
      accuracy: Number(localStorage.getItem("accuracy")),
      accuracyChange: Number(localStorage.getItem("dAccuracy")),
      score: Number(localStorage.getItem("score")),
      scoreChange: Number(localStorage.getItem("dScore")),
      time: Number(localStorage.getItem("time")),
      textLength: Number(localStorage.getItem("textLength")),
    };
    return stats;
  };

  const getStatsForRace = ({ answers, startTime, endTime }: TestResults) => {
    const time = (endTime - startTime) / (1000 * 60);
    const avgWordLength = 5;
    const wrongAnswers = answers.filter(a => a === "-").length;
    const rightAnswers = text.length - wrongAnswers;
    const wpm = text.length / avgWordLength / time;
    const score = rightAnswers * 20 - wrongAnswers * 20;
    const accuracy = ((rightAnswers - wrongAnswers) / text.length) * 100;

    const runStats: Stats = {
      speed: wpm,
      speedChange: wpm - stats.speed,
      accuracy: accuracy,
      accuracyChange: accuracy - stats.accuracy,
      score: score,
      scoreChange: score - stats.score,
      time: time * 60,
      textLength: text.length,
    };

    return runStats;
  };

  return (
    <div className="mx-5 pt-2">
      <TypeTest
        text={text}
        keySet={keySet}
        stats={stats}
        onTestFinish={handleTestFinish}
      />
      <div className="container markdown mt-5">
        <ReactMarkdown source={markdown} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const markdown = getMarkdownByName("practice.md").fileContents;
  return {
    props: { markdown },
  };
}

export default Practice;
