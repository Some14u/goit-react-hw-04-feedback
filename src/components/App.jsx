import { useState, useMemo } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";

export function App() {
  const options = ["good", "neutral", "bad"];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(option) {
    switch (option) {
      case "good": setGood(oldValue => oldValue + 1); break;
      case "neutral": setNeutral(oldValue => oldValue + 1); break;
      case "bad": setBad(oldValue => oldValue + 1); break;
      default: console.error(`No such option: ${option}`);
    }
  }

  const [total, positivePercentage] = useMemo(() => {
    const total = good + neutral + bad;
    const positivePercentage = Math.round(good / total * 100);
    return [total, positivePercentage];
  }, [good, neutral, bad]);

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={e => onLeaveFeedback(e.target.name)} />
      </Section>
      <Section title="Statistics">
        <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
      </Section>
    </>
  );
}

