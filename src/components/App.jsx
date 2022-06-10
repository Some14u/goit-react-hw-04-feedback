import React from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";

export class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 }
  options = Object.keys(this.state);

  onLeaveFeedback = option => {
    this.setState(oldState => ({ [option]: oldState[option] + 1 }));
  }

  countTotalFeedback = (list = this.constructor.options) => {
    const {good, neutral, bad} = this.state
    return good + neutral + bad;
  }

  countPositivePercentage() {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositivePercentage()
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.options} onLeaveFeedback={e => this.onLeaveFeedback(e.target.name)} />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage}/>
        </Section>
      </>
    )
  };
}

