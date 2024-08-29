import React from "react";

const FormInputOptions = ({ labelName, inputName, options, values, handleChange, value }) => {

  return (
    <div>
      <label className="block mb-1 font-semibold">{labelName}</label>
      <select
        name={inputName}
        value={value}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
      >
        {options.map((op, index) => (
          <option key={values[index]} value={values[index]} className=" bg-mylight2">
            {options[index]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormInputOptions;
