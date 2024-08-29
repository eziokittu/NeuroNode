import React from "react";

const FormInputOptions = ({ labelName, inputName, value, handleChange, inputMin, inputMax, inputStep }) => {

  return (
    <div>
      <label className="block mb-1 font-semibold">{labelName}</label>
      <input
        type="number"
        name={inputName}
        value={value}
        onChange={handleChange}
        min={inputMin}
        max={inputMax}
        step={inputStep}
        className="w-full p-2 border rounded-lg mb-4 bg-mylight2"
      />
    </div>
  );
};

export default FormInputOptions;
