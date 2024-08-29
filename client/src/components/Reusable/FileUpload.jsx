import React, { useState } from 'react';

const FileUpload = ({ api, heading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreview(URL.createObjectURL(file));
    }
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
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`+api, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const result = await response.json();
      console.log(result);

      alert(`Prediction: ${result.prediction}`);
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-lg w-5/6 md:w-1/2 flex flex-col gap-6">
      <h2 className="text-xl font-bold mb-4 text-center">{heading}</h2>

      <input
        type="file"
        accept="image/*" // Accepts image files only
        onChange={handleImageChange}
        className="mb-4 w-full text-sm"
      />

      {preview && (
        <div className="mb-4">
          <img src={preview} alt="Preview" className="w-full h-auto object-cover rounded-lg" />
        </div>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full hover:bg-blue-600 transition duration-300"
      >
        Upload Image
      </button>
    </form>
  );
};

export default FileUpload;
