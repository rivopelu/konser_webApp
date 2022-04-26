import React from "react";

const BtnComp = ({ title, onclick, className }) => {
  return (
    <div>
      <button
        className={`bg-purple-900 px-3 py-1 rounded-sm text-white flex hover:-translate-y-1 duration-200 active:bg-purple-700 ${className}`}
        onClick={onclick}
      >
        {title}
      </button>
    </div>
  );
};

export default BtnComp;
