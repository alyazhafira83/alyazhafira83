import React from 'react'

const Button = ({text}) => {
  return (
    <div className='px-5 pt-1 pb-2 rounded-md text-white bg-blue-900 font-medium cursor-pointer'>
        {text}
    </div>
  )
}

export default Button