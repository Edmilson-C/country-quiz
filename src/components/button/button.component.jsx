import React from 'react'

import './button.styles.scss'

const Button = ({ content, option, type }) => (
  <button type="submit" className={`btn btn--${type}`}>
    {option && <span className="btn--answer__option">{option}</span>}
    <span className="btn--answer__option">A</span>
    {content}
    Mozambique
  </button>
)

export default Button
