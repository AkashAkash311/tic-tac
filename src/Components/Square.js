import React from 'react'

const Square = ({ value, onSquareClick}) => {

  return (
    <div className='h-12 w-10'>
        <button  className=' border border-black h-12 w-10 cursor-auto' onClick={onSquareClick} >{value}</button>
    </div>
  )
}

export default Square