import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(60);
  const [isRunning, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (isRunning && counter>0) {
      timer = setInterval(() => {
        setCounter(prev => prev-1);
      }, 200);
    }
    return () => clearInterval(timer);
  }, [isRunning, counter]);

  function startWatch() {
    setRunning(true);
  }

  function pauseWatch() {
    setRunning(false);
  }

  function resetWatch() {
    setCounter(60);
    setRunning(false);
  }

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={startWatch}>Start</button>
      <button onClick={pauseWatch}>Pause</button>
      <button onClick={resetWatch}>Reset</button>
    </>
  );
}

export default App;