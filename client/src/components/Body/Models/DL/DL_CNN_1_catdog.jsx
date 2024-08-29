import React from 'react';
import FileUpload from '../../../Reusable/FileUpload';
import PageTextArea from '../../../Reusable/PageTextArea';

const DL_CNN_1_catdog = () => {
  return (
    <div
      className='flex flex-col items-center  min-h-screen bg-mydark2 lg:ml-64 mt-12 py-12'
    >
      <PageTextArea 
        heading={'Cat/Dog Classification Model'}
        body={"This is a CNN model for classifying images of Cats and Dogs. The accuracy isn't great but classifying correctly most of the times."}
        developedBy={'Bodhisatta'}
      />

      {/* Component to upload an image and get the predicted result */}
      <FileUpload api={'/api/predict1'} heading={'Upload a cat/dog Image'}/>
    </div>
  )
}

export default DL_CNN_1_catdog