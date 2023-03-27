import React, { useState } from "react";

function SafetyElement({ text }) {
  const [visible, setVisible] = useState(1);
  return (
    <>
      <div
        className="safetyHygiene-element-title"
        style={{ zIndex: visible }}
        onClick={() => {
          setVisible(-2);
        }}
      >
        <img src={text} className="safety-element-image" alt="safety element" />
      </div>
    </>
  );
}

export default SafetyElement;
