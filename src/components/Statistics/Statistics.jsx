import PropTypes from "prop-types";
import Notification from "components/Notification";
import s from "./Statistics.module.css";

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      { good + neutral + bad === 0
        ? <Notification message="There is no feedback"/>
        : <ul> {[
          buildOption("good", good),
          buildOption("neutral", neutral),
          buildOption("bad", bad),
          buildOption("total", total),
          buildOption("positivePercentage", positivePercentage + "%", "positive feedback")
        ]} </ul>
      }
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}

function buildOption(option, value, caption = option) {
  return <li className={s.field} key={option} >{caption}: {value}</li>;
}

