import React, { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name, species }) => {
  const pRef = useRef(); // Create a reference to the paragraph element
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 }); // Create state to store the size of the paragraph element

  // Signature is identical to useEffect, but fires synchronously
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect(); // Get the size of the paragraph element
    setBoxSize({ width, height }); // Update the state with the size of the paragraph element
  }, [name]); // Only run this effect when the name prop changes

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <footer className="blockquote-footer">{species}</footer>
      </blockquote>

      {/* Display the size of the paragraph element */}
      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};
