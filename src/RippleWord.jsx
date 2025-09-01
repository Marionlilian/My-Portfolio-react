import React from 'react'
import './RippleWord.css'; 
const RippleWord = ({word}) => {
  return (
    <div>
      <span className='ripple-word-wrapper'>
      <span className='ripple-circle'></span>
      <span className='ripple word'>{word}</span>
      </span>
    </div>
  )
}

export default RippleWord
