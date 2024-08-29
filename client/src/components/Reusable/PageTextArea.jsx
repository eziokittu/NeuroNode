import React from 'react';
import { useNavigate } from 'react-router-dom'

const PageTextArea = ({heading, body, developedBy}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-lg w-5/6 md:w-1/2 mb-4 flex flex-col gap-1">
      <p className="text-center text-xl font-bold">{heading}</p>
      <p className='text-justify text-sm'>{body}</p>
      {developedBy && 
        <p className='text-right pt-12'
        >Model(s) Developed by - 
          <span 
            className=' pl-2 font-bold text-xl text-mygreen hover:text-mygreen2 cursor-pointer' 
            onClick={() => {navigate('/credits')}}
          >{developedBy}</span>
        </p>
      }
    </div>
  )
}

export default PageTextArea