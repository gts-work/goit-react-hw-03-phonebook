import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactsList.module.css";

const ContactItem = ({ id, name, number, onDelete }) => (
  <tr key={id}>
    <td>{name}</td>
    <td>{number}</td>
    <td>
      <button
        className={styles.delete_contact_btn}
        value={id}
        onClick={onDelete}
      >
        Delete
      </button>
    </td>
  </tr>
);

ContactItem.defaultProps = {
  onDelete: () => {},
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onDelete: PropTypes.func,
};

export default ContactItem;
