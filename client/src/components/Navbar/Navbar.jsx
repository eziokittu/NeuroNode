import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ serverActive, sidebarOpen, toggleSidebar }) => {
  return (
    <div className='fixed z-10 top-0 h-6 bg-mydark1 w-full px-2 flex flex-row justify-between items-center text-mylight1 border-y border-mylight1'>

      {/* Sidebar open icon */}
      {!sidebarOpen ? (
        <div onClick={toggleSidebar} className='lg:hidden hover:text-mygreen'>
          <svg className='w-8 h-8' fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.001 7.128L6 10.438l19.998-.005L26 7.124zM6.001 21.566L6 24.876l19.998-.006.002-3.308zM6.001 14.341L6 17.65l19.998-.004.002-3.309z"></path></g></svg>
        </div>
      ) : (
        <div onClick={toggleSidebar} className='lg:hidden hover:text-mygreen'>
          <svg className='w-6 h-6 ml-2' viewBox="0 0 16 16" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg8" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><metadata id="metadata5"><rdf:rdf><cc:work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type><dc:title></dc:title><dc:date>2021</dc:date><dc:creator><cc:agent><dc:title>Timothée Giet</dc:title></cc:agent></dc:creator><cc:license rdf:resource="http://creativecommons.org/licenses/by-sa/4.0/"></cc:license></cc:work><cc:license rdf:about="http://creativecommons.org/licenses/by-sa/4.0/"><cc:permits rdf:resource="http://creativecommons.org/ns#Reproduction"></cc:permits><cc:permits rdf:resource="http://creativecommons.org/ns#Distribution"></cc:permits><cc:requires rdf:resource="http://creativecommons.org/ns#Notice"></cc:requires><cc:requires rdf:resource="http://creativecommons.org/ns#Attribution"></cc:requires><cc:permits rdf:resource="http://creativecommons.org/ns#DerivativeWorks"></cc:permits><cc:requires rdf:resource="http://creativecommons.org/ns#ShareAlike"></cc:requires></cc:license></rdf:rdf></metadata><rect transform="rotate(45)" ry="0" y="-1" x="4.3137083" height="2" width="14" id="rect1006"></rect><rect transform="rotate(-45)" ry="0" y="10.313708" x="-7" height="2" width="14" id="rect1006-5"></rect></g></svg>
        </div>
      )}

      {/* Website Name */}
      <div className='mx-auto text-center'>
        <p className='hover:text-mygreen font-bold text-xl'>
          <Link to={'/'}>NeuroNode</Link>
        </p>
      </div>

      {/* Server status */}
      <div className='text-sm'>
        {serverActive ? (
          <p className='text-green-500 font-bold'>Server active 🟢</p>
        ) : (
          <p className='text-red-500 font-bold'>Server loading 🔴</p>
        )}
      </div>

    </div>
  )
}

export default Navbar