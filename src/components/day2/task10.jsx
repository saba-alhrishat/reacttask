import React, { useState } from "react";

function Task10() {

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div >
      <input
        type="text"
        onChange={handleChange}
    
      />
      <p >
       YOU TYPING: {inputValue}
      </p>
    </div>
  );
}

export default Task10;
