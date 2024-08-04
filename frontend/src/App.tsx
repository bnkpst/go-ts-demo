import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("Bob")

  useEffect(() => {

    setData("Tom!!")

  }, [])
  
  return (
    <div className="App">
      Hello {data}
    </div>
  );
}

export default App;
