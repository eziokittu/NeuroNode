import React from 'react';

const PageHeadings = ({heading, isLarge}) => {
  return (
    <div className='w-full text-sm'>
      <p className={`text-center underline underline-offset-4 font-Roboto ${isLarge ? 'text-3xl' : 'text-lg'}`}
      >{heading}</p>
    </div>
  )
}

export default PageHeadings