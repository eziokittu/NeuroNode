import React, { useState, useEffect } from "react";

const ML_StudentPerformance = () => {
  const [formData, setFormData] = useState({
    gender: "male",
    ethnicity: "group A",
    parental_level_of_education: "bachelor's degree",
    lunch: "standard",
    test_preparation_course: "none",
    // math_score: 0,
    reading_score: 0,
    writing_score: 0,
  });

  // Validation: Convert to nearest integer after 2 seconds if user inputs float
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData((prevData) => ({
        ...prevData,
        // math_score: Math.max(0, Math.min(100, Math.round(prevData.math_score))),
        reading_score: Math.max(0, Math.min(100, Math.round(prevData.reading_score))),
        writing_score: Math.max(0, Math.min(100, Math.round(prevData.writing_score))),
      }));
    }, 2000);

    return () => clearTimeout(timer); // Clean up timer
  }, [formData.reading_score, formData.writing_score]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const testFormData = new FormData();
    testFormData.append("gender", formData.gender);
    testFormData.append("ethnicity", formData.ethnicity);
    testFormData.append("parental_level_of_education", formData.parental_level_of_education);
    testFormData.append("lunch", formData.lunch);
    testFormData.append("test_preparation_course", formData.test_preparation_course);
    testFormData.append("reading_score", formData.reading_score);
    testFormData.append("writing_score", formData.writing_score);

    try {

      // Send the form data as multipart/form-data
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/predict2`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        // body: testFormData
        body: JSON.stringify({
          gender: formData.gender,
          ethnicity: formData.ethnicity,
          parental_level_of_education: formData.parental_level_of_education,
          lunch: formData.lunch,
          test_preparation_course: formData.test_preparation_course,
          reading_score: formData.reading_score,
          writing_score: formData.writing_score
        })
        
      });

      const result = await response.json();
      alert(`Predicted Maths Score: ${Math.max(0, Math.min(100, Math.round(result.prediction)))}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  
  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 lg:ml-64 mt-12 py-12">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 ">
        <h2 className="text-2xl font-bold mb-4 text-center">Student Performance Prediction</h2>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Race/Ethnicity</label>
          <select
            name="ethnicity"
            value={formData.ethnicity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="group A">Group A</option>
            <option value="group B">Group B</option>
            <option value="group C">Group C</option>
            <option value="group D">Group D</option>
            <option value="group E">Group E</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Parental Level of Education</label>
          <select
            name="parental_level_of_education"
            value={formData.parental_level_of_education}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="bachelor's degree">Bachelor's Degree</option>
            <option value="some college">Some College</option>
            <option value="master's degree">Master's Degree</option>
            <option value="associate's degree">Associate's Degree</option>
            <option value="high school">High School</option>
            <option value="some high school">Some High School</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Lunch</label>
          <select
            name="lunch"
            value={formData.lunch}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="standard">Standard</option>
            <option value="free/reduced">Free/Reduced</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Test Preparation Course</label>
          <select
            name="test_preparation_course"
            value={formData.test_preparation_course}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
          >
            <option value="none">None</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        {/* <div className="mb-4">
          <label className="block mb-2 font-semibold">Math Score</label>
          <input
            type="number"
            name="math_score"
            value={formData.math_score}
            onChange={handleChange}
            min="0"
            max="100"
            step="1"
            className="w-full p-2 border rounded-lg"
          />
        </div> */}

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Reading Score</label>
          <input
            type="number"
            name="reading_score"
            value={formData.reading_score}
            onChange={handleChange}
            min="0"
            max="100"
            step="1"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-semibold">Writing Score</label>
          <input
            type="number"
            name="writing_score"
            value={formData.writing_score}
            onChange={handleChange}
            min="0"
            max="100"
            step="1"
            className="w-full p-2 border rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default ML_StudentPerformance;
