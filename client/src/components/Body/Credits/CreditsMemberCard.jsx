import React from 'react';
import SocialLinks from './SocialLinks';

const CreditsMemberCard = ({ member }) => {
  const redirectToGmail = ({e}) => {
    const email = e;
    const subject = '[Redirected from NeuroNode]';
    const body = 'Hi ' + member.firstname + '\n';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank');
  };

  return (
    <div className='mb-8 p-2 rounded-2xl group
      bg-gradient-to-b from-mygreen/10 to-mydark1/80 hover:from-mygreen/30 hover:to-mydark1
      shadow-[0_0_5px_black] hover:shadow-[0_0_15px_black]'>

      {/* Small Screens */}
      <div className='md:hidden flex flex-col'>

        {/* Image and Social Links */}
        <div className='mx-auto flex flex-col gap-2'>
          {/* Image */}
          <img
            src={member.image}
            alt={member.firstname}
            className='w-44 h-44 rounded-full 
              border-4 border-mygreen shadow-[0_10px_25px_green]'
          />

          {/* Links */}
          <SocialLinks member={member} />
        </div>

        {/* name */}
        <div className='flex flex-row gap-2 items-center text-center justify-center text-mygreen font-bold'>
          <p className='text-xl'>{member.firstname} {member.lastname}</p>
        </div>

        {/* Bio */}
        <p className='text-justify text-sm py-4'>{member.bio}</p>

        {/* Contact Emails */}
        <div className='flex flex-col gap-2 justify-center items-center text-sm pb-4'>
          <p 
            onClick={() => (redirectToGmail(member.email_primary))}
            className='underline underline-offset-4 hover:text-mygreen cursor-pointer'
          >{member.email_primary}</p>
          <p 
            onClick={() => (redirectToGmail(member.email_secondary))}
            className='underline underline-offset-4 hover:text-mygreen cursor-pointer'
          >{member.email_secondary}</p>
        </div>

      </div>

      {/* Large Screens */}
      <div className='hidden md:flex flex-row'>

        {/* Image and Social Links */}
        <div className='mx-auto flex flex-col gap-2 w-fit'>
          {/* Image */}
          <img
            src={member.image}
            alt={member.firstname}
            className='w-60 h-60 rounded-full 
              border-4 border-mygreen shadow-[0_10px_25px_green]'
          />

          {/* Links */}
          <SocialLinks member={member} />
        </div>

        {/* RIght side */}
        <div className='flex flex-col w-80 justify-center pr-8'>
        {/* name */}
          <div className='flex flex-row gap-2 items-center text-center justify-center text-mygreen font-bold'>
            <p className='text-2xl'>{member.firstname} {member.lastname}</p>
          </div>

          {/* Bio */}
          <p className='text-justify text- py-4'>{member.bio}</p>

          {/* Contact Emails */}
          <div className='flex flex-col gap-2 justify-center items-center text-sm pb-4 '>
            <p 
              onClick={() => (redirectToGmail(member.email_primary))}
              className='underline underline-offset-4 hover:text-mygreen cursor-pointer'
            >{member.email_primary}</p>
            <p 
              onClick={() => (redirectToGmail(member.email_secondary))}
              className='underline underline-offset-4 hover:text-mygreen cursor-pointer'
            >{member.email_secondary}</p>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default CreditsMemberCard