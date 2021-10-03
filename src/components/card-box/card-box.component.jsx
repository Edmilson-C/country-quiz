import React from 'react'

import Button from '../button/button.component'

import './card-box.styles.scss'

const CardBox = () => (
  <div className="card-box">
    <h3 className="card-box__heading"> Title will be here </h3>
    <Button type="answer" option="A" content="Mozambique" />
    <Button type="answer" option="B" content="Mozambique" />
    <Button type="answer" option="C" content="Mozambique" />
    <Button type="answer" option="D" content="Mozambique" />
  </div>
)

export default CardBox
