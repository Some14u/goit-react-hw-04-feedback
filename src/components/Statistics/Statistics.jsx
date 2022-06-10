import PropTypes from "prop-types";
import Notification from "components/Notification";
import Option from "./Option";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    good + neutral + bad === 0
    ? <Notification message="There is no feedback"/>
    : <ul>
        <Option key="good" value={good}>good</Option>
        <Option key="neutral" value={neutral}>neutral</Option>
        <Option key="bad" value={bad}>bad</Option>
        <Option key="total" value={total}>total</Option>
        <Option key="positivePercentage" value={positivePercentage + "%"}>positive feedback</Option>
      </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

