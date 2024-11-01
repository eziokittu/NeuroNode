import React, { useState, useEffect } from "react";
import FormSubmitButton from "../../../Reusable/FormSubmitButton";
import FormInputOptions from "../../../Reusable/FormInputOptions";
import FormInputNumber from "../../../Reusable/FormInputNumber";
import PageTextArea from "../../../Reusable/PageTextArea";

const ML_DiabetesPrediction = () => {
  const [formData, setFormData] = useState({
    Pregnancies: 0,
    Glucose: 0,
    BloodPressure: 0,
    SkinThickness: 0,
    Insulin: 0,
    BMI: 0,
    DiabetesPedigreeFunction: 0,
    Age: 0,
  });

  // Validation: Convert to nearest integer after 1.5 seconds if user inputs float
  useEffect(() => {
    const timer = setTimeout(() => {
      setFormData((prevData) => ({
        ...prevData,
        Pregnancies: Math.max(0, Math.round(prevData.Pregnancies)),
        Glucose: Math.max(0, Math.round(prevData.Glucose)),
        BloodPressure: Math.max(0, Math.round(prevData.BloodPressure)),
        SkinThickness: Math.max(0, Math.round(prevData.SkinThickness)),
        Insulin: Math.max(0, Math.round(prevData.Insulin)),
        BMI: Math.max(0, prevData.BMI),
        DiabetesPedigreeFunction: Math.max(0, prevData.DiabetesPedigreeFunction),
        Age: Math.max(0, Math.round(prevData.Age)),
      }));
    }, 1500);

    return () => clearTimeout(timer); // Clean up timer
  }, [formData.Pregnancies, formData.Glucose, formData.BloodPressure, formData.SkinThickness, formData.Insulin, formData.Bmi, formData.DiabetesPedigreeFunction, formData.Age, ]);

  const [resultString, setResultString] = useState("")

  // function to submit the form and call the API
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Send the form data as multipart/form-data
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/predict3`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Pregnancies: formData.Pregnancies,
          Glucose: formData.Glucose,
          BloodPressure: formData.BloodPressure,
          SkinThickness: formData.SkinThickness,
          Insulin: formData.Insulin,
          BMI: formData.BMI,
          DiabetesPedigreeFunction: formData.DiabetesPedigreeFunction,
          Age: formData.Age,
        })
        
      });

      const result = await response.json();
      setResultString(`The Person is predicted to ${(result.prediction === 0) ? 'not have' : 'have'} Diabetes`)
      alert(`The Person is predicted to ${(result.prediction === 0) ? 'not have' : 'have'} Diabetes`);
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
        heading={'Diabetes Prediction Model'}
        body={"The Diabetes Prediction model is designed for pregnant women and utilizes clinical parameters such as glucose levels, BMI, number of pregnancies, blood pressure, skin thickness, insulin levels, diabetes pedigree function, and age to classify diabetes risk, achieving an accuracy of 77%. It leverages Scikit-learn's Support Vector Classification, a classifier model optimized for healthcare applications, with a focus on recall to minimize missed cases."}
        developedBy={'Saurabh'}
      />

      {/* Prediction Form */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-mylight1 p-2 sm:p-6 rounded-lg shadow-lg w-5/6 md:w-1/2 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Diabetes Prediction</h2>

        {/* Input - Pregnancies */}
        <FormInputNumber 
          labelName={'Pregnancies'}
          inputName={'Pregnancies'}
          value={formData.Pregnancies}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"1"}
        />

        {/* Input - Glucose */}
        <FormInputNumber 
          labelName={'Glucose'}
          inputName={'Glucose'}
          value={formData.Glucose}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"1"}
        />

        {/* Input - BloodPressure */}
        <FormInputNumber 
          labelName={'BloodPressure'}
          inputName={'BloodPressure'}
          value={formData.BloodPressure}
          handleChange={handleChange}
          inputMin={"0"}
          // inputMax={"100"}
          inputStep={"1"}
        />

        {/* Input - SkinThickness */}
        <FormInputNumber 
          labelName={'SkinThickness'}
          inputName={'SkinThickness'}
          value={formData.SkinThickness}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"1"}
        />

        {/* Input - Insulin */}
        <FormInputNumber 
          labelName={'Insulin'}
          inputName={'Insulin'}
          value={formData.Insulin}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"1"}
        />

        {/* Input - BMI */}
        <FormInputNumber 
          labelName={'BMI'}
          inputName={'BMI'}
          value={formData.BMI}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"0.01"}
        />

        {/* Input - DiabetesPedigreeFunction */}
        <FormInputNumber 
          labelName={'DiabetesPedigreeFunction'}
          inputName={'DiabetesPedigreeFunction'}
          value={formData.DiabetesPedigreeFunction}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"0.001"}
        />

        {/* Input - Age */}
        <FormInputNumber 
          labelName={'Age'}
          inputName={'Age'}
          value={formData.Age}
          handleChange={handleChange}
          inputMin={"0"}
          inputStep={"1"}
        />

        {/* Button - Form Submit */}
        <FormSubmitButton name={'Predict for Diabetes'} />
        
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

export default ML_DiabetesPrediction;