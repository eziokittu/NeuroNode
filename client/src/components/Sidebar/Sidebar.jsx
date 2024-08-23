import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({serverActive}) => {
  const [sidebarOpen, setSidebaropen] = useState(false);

  const toggleSidebar = () => {
    setSidebaropen(!sidebarOpen);
  }

  return (
    <div className='relative top-6  text-slate-200'>

      {/* sidebar open icon */}
      <div className='bg-gray-800 w-fit lg:hidden fixed top-6'>
        {!sidebarOpen && (
          <div className=' flex flex-row gap-4'>
            <div className={`sm:hidden block`}>
              {serverActive ? (
                <p className='text-green-500 font-bold'>🟢</p>
              ) : (
                <p className='text-red-500 font-bold'>🔴</p>
              )}
            </div>
            <div onClick={toggleSidebar}>open</div>
          </div>
        )}
      </div>
      
      {/* Sidebar Menu*/}
      <div className={`lg:w-64 ${sidebarOpen ? 'w-5/6 sm:w-3/5 md:w-64' : 'w-0'} bg-gray-800 fixed top-6 h-full flex flex-col`}>
        {/* sidebar open icon */}
        <div className='flex flex-row'>
          {sidebarOpen && (
            <div className={`sm:hidden block`}>
              {serverActive ? (
                <p className='text-green-500 font-bold'>Server active 🟢</p>
              ) : (
                <p className='text-red-500 font-bold'>Server Loading 🔴</p>
              )}
            </div>
          )}
          <div
            className={`lg:hidden ${sidebarOpen ? '' : 'hidden'}  ml-auto mr-4`}
            onClick={toggleSidebar}
          >close</div>
        </div>

        {/* Menu options */}
        <ul className='h-full overflow-scroll pt-2'>

          {/* Dashboard - like the home page */}
          <li className='text-center cursor-pointer hover:text-green-500'>
            <Link to={'/dashboard'}>Dashboard</Link>
          </li>
          <li className='text-center cursor-pointer hover:text-green-500'>
            <Link to={'/credits'}>Credits</Link>
          </li>

          {/* All ML Models */}
          <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Machine Learning</li>
          <ul>

            {/* Regression Models */}
            <li className='pl-4 pt-4'>Regression Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-green-500'>
                <Link to={'/models/ml/regression/1'}>Option 1</Link>
              </li>
            </ul>

            {/* Classification Models */}
            <li className='pl-4 pt-4'>Classification Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-green-500'>
                <Link to={'/models/ml/classification/1'}>Option 1</Link>
              </li>
            </ul>
          </ul>

          {/* All AI Models */}
          <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Artificial Intelligence</li>
          <ul>

            {/* ANN Models */}
            <li className='pl-4 pt-4'>ANN Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-green-500'>
                <Link to={'/models/ai/ann/1'}>Option 1</Link>
              </li>
            </ul>

            {/* CNN Models */}
            <li className='pl-4 pt-4'>CNN Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-green-500'>
                <Link to={'/models/ai/cnn/1'}>Cat Dog Classification 1</Link>
              </li>
            </ul>
          </ul>

          {/* Other Models */}
          <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Other / Testing</li>
          <ul className='pt-4'>
            <li className='pl-8 cursor-pointer hover:text-green-500'>Option 1</li>
            <li className='pl-8 cursor-pointer hover:text-green-500'>Option 2</li>
          </ul>

          <p className='h-16'></p>

        </ul>
      </div>

    </div>
  )
}

export default Sidebar