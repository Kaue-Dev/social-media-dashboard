import React from 'react'

const PrimaryText = ({ textContent, fontSize }) => {
  return (
    <h2 className={`${fontSize} font-bold`}>
      {textContent}
    </h2>
  )
}

export default PrimaryText