import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option =>
    <button
      className={s.button}
      key={option}
      name={option}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  );
}


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}