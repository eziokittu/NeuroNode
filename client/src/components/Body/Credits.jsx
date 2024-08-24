import React from 'react';
import PageHeadings from '../Reusable/PageHeadings';
import CreditsMemberCard from '../Reusable/CreditsMemberCard';
import projectMembers from '../../data/projectMembers.json';

const Credits = () => {
  return (
    <div className=' bg-mydark2 text-mylight1 mt-6 pt-6 lg:ml-64'>
      
      {/* Heading */}
      <PageHeadings heading={"Credits Page"} isLarge={true}/>

      {/* Small description */}
      <p></p>

      {/* Anuroop's Profile Card */}
      <CreditsMemberCard member={projectMembers.anuroop}/>

      {/* Bodhisatta's Profile Card */}
      <CreditsMemberCard member={projectMembers.bodhisatta}/>
      
    </div>
  )
}

export default Credits