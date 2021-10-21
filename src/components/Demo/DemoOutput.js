import React from 'react';

const DemoOutput = (props) => {
  console.log('DemoOutput RUNNING');
  return <p>{props.show ? 'This is new!' : ''}</p>;
};


// This is how to use 'React.memo' for functional components (it won't work like this for class-based components)
// 'memo' tells React that it should look at the props that the 'DemoOutput' component gets (in this case, passed-in from App.js),
// and should compare the new props to the previous props, and only if the props have changed should the component (and therefore, child components) get re-evaluated
// Used this way, it only works for 'primitive values' (numbers, strings, booleans, undefined and null).
// In JS, even identical 'reference types' (non primitive values, e.g arrays and objects (including functions)) are not considered the same, e.g:

// 'false === false' returns true
// '10 === 10' returns true
// '"Hi" === "Hi" returns true
// '[1, 2, 3] === [1, 2, 3]' returns false
// '{name: "Jethro"} === {name: "Jethro"}' returns false

// So if there is a 'reference value' prop, for example '[1, 2, 3]' passed-in from App.js, this component will still get re-evaluated
export default React.memo(DemoOutput);

// See https://academind.com/tutorials/reference-vs-primitive-values for more on 'Reference Types vs Primitive Values'
