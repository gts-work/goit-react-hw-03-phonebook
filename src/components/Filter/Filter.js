import React from "react";
import PropTypes from "prop-types";

import styles from "./Filter.module.css";

const Fiter = ({ value, onChange }) => (
  <label>
    <span className={styles.title_filter}>Find contacts by name</span>
    <input
      className={styles.input_filter}
      type="text"
      value={value}
      onChange={onChange}
    />
  </label>
);

Fiter.defaultProps = {
  value: "",
  onChange: () => {},
};

Fiter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Fiter;
