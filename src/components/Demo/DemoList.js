import React, { useMemo } from 'react';

import classes from './DemoList.module.css';

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]);
  // The useMemo() hook, memoizes (turns out that is a real word, that for some reason means the same as memorize) what you return from this function
  // Like with useCallback or useEffect, the second argument is an array of dependencies that tell React when to update sortedList
  // (in this example, it will update whenever 'items' changes)


  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
