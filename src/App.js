import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [advise, setAdvise] = useState("");

  useEffect(() => {
    getAdvice();
  }, [])

    const getAdvice = async() => {
    const response = await fetch("http://www.boredapi.com/api/activity/");
    const data = await response.json();
    setAdvise(data.activity)
  
    }
  const changeButton =() => {
    getAdvice();
  }
  
  return (
    <div>
    <div className="App">
      <h1>{advise}</h1>
    </div>
    <div className="App">
      <button onClick={changeButton}>New advise</button>
    </div>
    </div>
  );
}

export default App;
