import React from 'react';
import { FaPlus } from 'react-icons/fa';
import PropTypes from 'prop-types';

import './Form.css';

export default function Form({ handleSubmit, handleChange, newTask }) {
  return (
    <form action="#" onSubmit={handleSubmit} className="form">
      <input onChange={handleChange} type="text" value={newTask} />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};
