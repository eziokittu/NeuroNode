import React from 'react';
import FileUpload from '../../../Reusable/FileUpload';

const AI_CNN_1_catdog = () => {
  return (
    <div
      className='h-screen bg-blue-400 mt-6 pt-6 lg:ml-64 px-2 sm:px-4'
    >
      <p>AI CNN model for cat dog classification done here</p>

      <div>
        <FileUpload api={'/api/predict1'} heading={'Upload a cat/dog Image'}/>
      </div>
    </div>
  )
}

export default AI_CNN_1_catdog