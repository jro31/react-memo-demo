import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);
  // We also use useMemo here to ensure that a new array isn't created each time the component re-renders
  // Otherwise the useMemo in DemoList.js would be useless, as the 'items' prop would be considered a new array each time

  // useCallback vs useMemo
  // useCallback remembers a function
  // useMemo remembers the returned value from a function (it 'memoizes' data, basically)

  // Therefore, you're going to use useCallback a lot more often
  // You'll only use useMemo if calculating that data is performance-intensive (for example, if it involves sorting)

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
