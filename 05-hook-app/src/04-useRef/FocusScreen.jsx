import React, { useRef } from "react";

export const FocusScreen = () => {
  // Define a reference to the input element
  const inputRef = useRef();

  const onClick = () => {
    // Select the input element using its reference
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      {/* Add an input element with the defined reference */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mt-2"
      />

      {/* Add a button with the onClick event to set the focus on the input element */}
      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
