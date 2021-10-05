/* eslint-disable object-curly-newline */
import React from 'react'

import './button.styles.scss'

const Button = ({ content, option, type, handleClick }) => (
  <button type="submit" onClick={handleClick} className={`btn btn--${type}`}>
    {option && <span className="btn--answer__option">{option}</span>}
    {content}
  </button>
)

export default Button
