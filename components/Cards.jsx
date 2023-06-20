import React from 'react'
import {FiChevronRight} from 'react-icons/fi'

const Cards = ({cardData}) => {
  return (
    <div className={`w-full border border-gray-500 ${cardData?.bgColor} text-white flex flex-col rounded-lg ` }>
    <h1 className='p-4'>{cardData?.heading}</h1>
    <div className='border-t flex justify-between items-center py-2 px-4 border-gray-500 w-full cursor-pointer'>
        <h2>{cardData?.linkTitle}</h2>
        <span><FiChevronRight/></span>
    </div>
    </div>
  )
}

export default Cards