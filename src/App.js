import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);
  // useCallback allows us to store a function across component executions (so one function is saved, and the function is not recreated (as a new function) with every execution)

  // For example, without useCallback, we would do the following with each re-evaluation:
  // let initialObject = {name: 'Jethro'}
  // let currentObject = {name: 'Jethro'}
  // 'initialObject === currentObject' returns false (as it is not pointing at the same object in memory)

  // With useCallback, we do:
  // let initialObject = {name: 'Jethro'}
  // let currentObject = initialObject
  // 'initialObject === currentObject' returns true

  // Therefore, if we know that a function will never change, we can use useCallback to store it

  // The second argument is an array of dependencies (an empty array here) used in the same way as with useEffect
  // These determine when toggleParagraphHandler should re-run
  // If it is an empty array, it will never be re-run, meaning that the function stored in toggleParagraphHandler will never change


  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
