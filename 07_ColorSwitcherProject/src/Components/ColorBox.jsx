import React from "react";

const ColorBox = ({ color }) => {
  return (
<div style={{
        backgroundColor: color,
      }}
      className=" className=' w-35 p-5 h-30  flex justify-center items-center text-base rounded-3xl"> {color}</div>
  );
};

export default ColorBox;
