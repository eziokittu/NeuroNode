import React from 'react';
import PageHeadings from '../../Reusable/PageHeadings';
import CreditsMemberCard from './CreditsMemberCard';
import projectMembers from '../../../data/projectMembers.json';

const Credits = () => {
  return (
    <div className=' bg-mydark2 text-mylight1 mt-12 pt-6 flex flex-col'>
      
      {/* Heading */}
      <PageHeadings heading={"Credits Page"} isLarge={true}/>

      <div className='max-w-[360px] md:max-w-[680px] mx-auto px-2 md:px-4'>
        {/* Small description */}
        <p className='text-justify text-sm py-4'>This showcase website for our Data Science models was possible due to our hardwork, determination, dedication and consistency. </p>

        {/* Anuroop's Profile Card */}
        <CreditsMemberCard member={projectMembers.anuroop}/>

        {/* Bodhisatta's Profile Card */}
        <CreditsMemberCard member={projectMembers.bodhisatta}/>
      </div>

    </div>
  )
}

export default Credits