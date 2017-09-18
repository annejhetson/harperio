import React from 'react'

const IncrementCount = ({ count, increment }) => {
  return <button onClick={ () => { increment(count+1) } }>+</button>
}

export default IncrementCount
