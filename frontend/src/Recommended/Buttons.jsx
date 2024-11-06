import React from 'react'

const Buttons = ({ ClickHandler, value, title, }) => {
  return (
    <>
      <button type="button" value={value} onClick={ClickHandler} class="btn ">{title}</button>
    </>
  )
}

export default Buttons
