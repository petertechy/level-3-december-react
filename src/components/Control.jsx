import React from 'react'

const Control = ({increaseCount}) => {
  return (
    <div>
        <button onClick={increaseCount}>Increase Count</button>
    </div>
  )
}

export default Control