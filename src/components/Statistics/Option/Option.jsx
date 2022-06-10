import PropTypes from "prop-types";
import s from "./Option.module.css";

export default function Option({ value, children }) {
  return <li className={s.option} >{children}: {value}</li>;
}

Option.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.string.isRequired,
}
