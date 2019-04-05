import React from 'react'

export default function NotefulForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      onSubmit={props.onSubmit}
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}