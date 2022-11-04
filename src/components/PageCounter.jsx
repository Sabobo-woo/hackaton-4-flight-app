import { useState } from 'react';

export default function PageCounter({ counterNr, setNrOnCounter }) {

  const increaseCount = () => {
    setNrOnCounter(counterNr + 1);
  }

  const lowerCount = () => {
    setNrOnCounter(Math.max(1, counterNr - 1));
  }

  return (
    <div className="counter">

      <button onClick={lowerCount}>Previous</button>
      {counterNr}
      <button onClick={increaseCount}>Next</button>

    </div>
  )
}