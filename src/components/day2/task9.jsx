import React , { useState } from "react";

function Task9() {
  const [show, setShow] = useState(false);

  const toggleVisibility = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>{show ? "Hide" : "Show"}</button>
      {show && <div>Text to show and hide</div>}
    </div>
  );
}


export default Task9;
