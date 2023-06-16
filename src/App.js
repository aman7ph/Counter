import React from 'react';
import './style.css';

export default function App() {
  const [track, stateFun] = React.useState(0);
  function onClickAdd() {
    // stateFun(track + 1);
    stateFun((prevValue) => prevValue + 1);
  }
  function onClickSub() {
    // stateFun(track - 1);
    stateFun((prevValue) => prevValue - 1);
  }
  return (
    <div className="counter">
      <button className="counter--minus" onClick={onClickSub}>
        –
      </button>
      <div className="counter--count">
        <h1>{track}</h1>
      </div>
      <button className="counter--plus" onClick={onClickAdd}>
        +
      </button>
    </div>
  );
}

/* my first solution
  const [track, stateFun] = React.useState(0);
  function onClickAdd() {
    let count = track;
    count += 1;
    stateFun(count);
  }
  function onClickSub() {
    let count = track;
    count -= 1;
    stateFun(count);
  }
*/
