import React from "react";

const FormSubmitButton = ({ name }) => {
  return (
    <button
      type="submit"
      className="w-full bg-mygreen text-white p-2 rounded-lg hover:bg-mygreen2 font-bold transition duration-300"
    >
      {name}
    </button>
  );
};

export default FormSubmitButton;
