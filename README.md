Based on *'Section 12: A Look Behind the Scenes of React & Optimization Techniques'* of Academind's *'React - The Complete Guide'* course, this repo has commits of examples with explanations of:

* `React.memo` with primitive value props to only re-evaluate when those props change
* `useCallback()` used with `React.memo` with function props to avoid re-evaluating each time the parent component is re-evaluated
* `useCallback()` when used with dependencies
* `useMemo()`, and how it's different to `useCallback()`
