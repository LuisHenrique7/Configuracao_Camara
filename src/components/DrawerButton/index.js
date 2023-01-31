import React from 'react'

const DrawerButton = ({ text, goToPage }) => {
  return (
    <div>
        <button onClick={goToPage}>{text}</button>
    </div>
  )
}

export default DrawerButton