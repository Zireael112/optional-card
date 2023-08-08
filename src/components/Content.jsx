/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Content = ({props, children}) => {
    const {title, description} = props.text
  return (
    <>
    {children}
    <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={'#'} className='btn btn-primary'>Go somewhere</a>
    </div>  
    </>
  )
}
