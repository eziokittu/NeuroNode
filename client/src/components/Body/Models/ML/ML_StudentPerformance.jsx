import React, { useState, useEffect } from "react";
import FormSubmitButton from "../../../Reusable/FormSubmitButton";
import FormInputOptions from "../../../Reusable/FormInputOptions";
import FormInputNumber from "../../../Reusable/FormInputNumber";
import PageTextArea from "../../../Reusable/PageTextArea";

const ML_StudentPerformance = () => {
  const [formData, setFormData] = useState({
    gender: "male",
    ethnicity: "group C",
    parental_level_of_education: "bachelor's degree",
    lunch: "standard",
    test_preparation_course: "none",
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

  const [resultString, setResultString] = useState("");

  // function to submit the form and call the API
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data as multipart/form-data
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/predict2`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
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
      setResultString(`Predicted Maths Score: ${Math.max(0, Math.min(100, Math.round(result.prediction)))}`);
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
    <div className="flex flex-col items-center min-h-screen bg-mydark2 lg:ml-64 mt-12 py-12 gap-4">

      {/* Some info about the model */}
      <PageTextArea 
        heading={'Student Performance Model'}
        body={"This is a regression model created to predict a student's math score based on their gender, ethnicity, parents' educational background, and their scores in reading and writing. To build the most accurate model, various algorithms like CatBoost, AdaBoost, Gradient Boosting, Random Forest, Linear Regression, K-Nearest Neighbors, Decision Trees, and XGBoost were experimented with. By comparing the performance of these models, the one that consistently produced the most reliable predictions was selected."}
        developedBy={'Anuroop'}
      />

      {/* Prediction Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-lg w-5/6 md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Student Performance Prediction</h2>

        {/* input - Gender */}
        <FormInputOptions 
          labelName={'Gender'} 
          inputName={'gender'}
          options={["Male", "Female"]} 
          values={["male", "female"]} 
          handleChange={handleChange} 
          value={formData.gender}
        />

        {/* Input - Race/Ethnicity */}
        <FormInputOptions 
          labelName={'Race/Ethnicity'} 
          inputName={'ethnicity'}
          options={["Group A", "Group B", "Group C", "Group D", "Group E"]} 
          values={["group A", "group B", "group C", "group D", "group E"]} 
          handleChange={handleChange} 
          value={formData.ethnicity}
        />

        {/* Input - Parental Level of Education */}
        <FormInputOptions 
          labelName={'Parental Level of Education'} 
          inputName={'parental_level_of_education'}
          options={["Bachelor's Degree", "Some College", "Master's Degree", "Associate's Degree", "High School", "Some High School"]} 
          values={["bachelor's degree", "some college", "master's degree", "associate's degree", "high school", "some high school"]} 
          handleChange={handleChange} 
          value={formData.parental_level_of_education}
        />

        {/* input - Lunch */}
        <FormInputOptions 
          labelName={'Lunch'} 
          inputName={'lunch'}
          options={['Standard', 'Free/Reduced']} 
          values={['standard', 'free/reduced']}
          handleChange={handleChange} 
          value={formData.lunch}
        />

        {/* Input - Test Preparation Course */}
        <FormInputOptions 
          labelName={'Test Preparation Course'} 
          inputName={'test_preparation_course'}
          options={['None', 'Completed']} 
          values={['none', 'completed']}
          handleChange={handleChange} 
          value={formData.test_preparation_course}
        />

        {/* Input - Reading Score */}
        <FormInputNumber 
          labelName={'Reading Score'}
          inputName={'reading_score'}
          value={formData.reading_score}
          handleChange={handleChange}
          inputMin={"0"}
          inputMax={"100"}
          inputStep={"1"}
        />

        {/* Input - Writing Score */}
        <FormInputNumber 
          labelName={'Writing Score'}
          inputName={'writing_score'}
          value={formData.writing_score}
          handleChange={handleChange}
          inputMin={"0"}
          inputMax={"100"}
          inputStep={"1"}
        />

        {/* Button - Form Submit */}
        <FormSubmitButton name={'Predict Maths Score'} />
        
      </form>

      {resultString !== "" && (
        <PageTextArea 
          heading={'Prediction Result'}
          body={resultString}
          isResult={true}
        />
      )}
    </div>
  );
};

export default ML_StudentPerformance;
