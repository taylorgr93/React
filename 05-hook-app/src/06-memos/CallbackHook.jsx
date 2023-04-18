import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);
  const incrementFather = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  // const incrementFather = () => setCounter(counter + 1);

  return (
    <>
      <h1>useCallback Hooks: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
