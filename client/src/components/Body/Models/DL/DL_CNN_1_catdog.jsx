// DL_CNN_1_catdog.js
import React, { useState } from 'react';
import ImageUpload from '../../../Reusable/ImageUpload';
import PageTextArea from '../../../Reusable/PageTextArea';
import FormSubmitButton from '../../../Reusable/FormSubmitButton';

const DL_CNN_1_catdog = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [resultString, setResultString] = useState("");

  const handleFileSelect = (file) => {
    setSelectedImage(file);  // Save the selected image file to state
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) {
      alert('Please select or capture an image!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/predict1`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      console.log(result);
      alert(`Prediction: ${result.prediction}`);
      setResultString(`${result.prediction}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className='flex flex-col items-center min-h-screen bg-mydark2 lg:ml-64 mt-12 py-12 gap-4'>
      <PageTextArea
        heading={'Cat/Dog Classification Model'}
        body={"This is a CNN model for classifying images of Cats and Dogs. The accuracy isn't great but classifying correctly most of the time."}
        developedBy={'Bodhisatta'}
      />

      {/* Form to handle file upload and submission */}
      <form onSubmit={handleSubmit} className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-lg w-5/6 md:w-1/2 flex flex-col gap-6">
        <h2 className="text-xl font-bold mb-4 text-center">Upload a cat/dog Image</h2>

        {/* Image Upload Component */}
        <ImageUpload onFileSelect={handleFileSelect} />

        {/* Button - Form Submit */}
        <FormSubmitButton name={'Upload Image'} />
      </form>

      {/* Display the result */}
      {resultString !== "" && (
        <PageTextArea
          heading={'Prediction Result'}
          body={resultString}
          isResult={true}
        />
      )}
    </div>
  );
}

export default DL_CNN_1_catdog;
