import React, { useState } from "react";

const ColorChange = () => {
  const [isRed, setIsRed] = useState(false);
  return (
    <>
      <button
        className={isRed ? "text-red-500" : "text-blue-500"}
        onClick={() => setIsRed(!isRed)}
      >
        Click me
      </button>
    </>
  );
};

export default ColorChange;
