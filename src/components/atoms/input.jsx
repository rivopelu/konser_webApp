import React from "react";

const InputComp = ({ id, title, className, type, placeholder, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-extralight mb-1" htmlFor={id}>
        {title}
      </label>
      <input
        required
        className={`flex text-sm border bg-transparent px-3 py-2 rounded-sm border-gray-300  focus:border-gray-500 dark:border-gray-700 focus:outline-none ${className}`}
        type={type}
        id={id}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComp;
