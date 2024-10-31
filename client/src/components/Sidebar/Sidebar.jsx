import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {


  return (
    <div className='relative text-slate-200'>

      {/* Sidebar Menu*/}
      <div className={`lg:w-64 ${sidebarOpen ? 'w-5/6 sm:w-3/5 md:w-64' : 'w-0'} bg-transparent fixed top-12 h-full flex flex-row`}>

        {/* Menu options */}
        <ul className='h-full w-full overflow-scroll pt-2 bg-mydark1/95 lg:bg-mydark1'>

          {/* Dashboard - like the home page */}
          <li className='text-center cursor-pointer hover:text-mygreen'>
            <Link to={'/dashboard'} onClick={toggleSidebar}>Dashboard</Link>
          </li>
          <li className='text-center cursor-pointer hover:text-mygreen'>
            <Link to={'/credits'} onClick={toggleSidebar}>Credits</Link>
          </li>

          {/* All ML Models */}
          <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Machine Learning</li>
          <ul>

            {/* Regression Models */}
            <li className='pl-4 pt-4'>Regression Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-mygreen'>
                <Link to={'/models/ml/regression/1'} onClick={toggleSidebar}>● Student Performance</Link>
              </li>
            </ul>

            {/* Classification Models */}
            <li className='pl-4 pt-4'>Classification Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-mygreen'>
                <Link to={'/models/ml/classification/1'} onClick={toggleSidebar}>● Diabetes Prediction</Link>
              </li>
            </ul>
          </ul>

          {/* All DL Models */}
          <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Deep Learning</li>
          <ul>

            {/* ANN Models */}
            <li className='pl-4 pt-4'>ANN Models</li>
            <ul>
              {/* <li className='pl-8 cursor-pointer hover:text-mygreen'>
                <Link to={'/models/dl/ann/1'} onClick={toggleSidebar}>Option 1</Link>
              </li> */}
            </ul>

            {/* CNN Models */}
            <li className='pl-4 pt-4'>CNN Models</li>
            <ul>
              <li className='pl-8 cursor-pointer hover:text-mygreen'>
                <Link to={'/models/dl/cnn/1'} onClick={toggleSidebar}>● Cat Dog Classification</Link>
              </li>
            </ul>
          </ul>

          {/* Other Models */}
          {/* <li className='font-bold mt-8 border-slate-500 border-y-2 text-center'>Other / Testing</li>
          <ul className='pt-4'>
            <li className='pl-8 cursor-pointer hover:text-mygreen'>Option 1</li>
            <li className='pl-8 cursor-pointer hover:text-mygreen'>Option 2</li>
          </ul> */}

          <p className='h-16'></p>

        </ul>

        {/* sidebar close icon */}
        <div
          className='flex flex-row lg:hidden w-8 h-full items-center animate-pulse bg-slate-800/60 group hover:bg-slate-800/90'
          onClick={toggleSidebar}
        >
          <div className={`lg:hidden ${sidebarOpen ? '' : 'hidden'} w-8 group-hover:text-mygreen `}>
            <svg viewBox="0 0 1024 1024" className='w-8 h-8 group-hover:w-10 group-hover:h-10 group-hover:-translate-x-1' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="currentColor"></path></g></svg>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Sidebar