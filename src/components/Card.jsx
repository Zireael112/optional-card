import React from 'react'
import { Content } from './Content'

export const Card = (props) => {
  return (
    <div className="card" style={{width: '18rem'}}>
      <Content props = {props}>
        {props.text.image ? <img src={props.text.image} className="card-img-top" alt="img"></img> : undefined}
      </Content>
    </div>
  )
}
