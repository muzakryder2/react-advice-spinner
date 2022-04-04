import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = async () => {
    try {
      const resp = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(resp.data.slip.advice);
    } catch (error) {
      console.log("oopsie... there is an error getting your advice");
    }
  };

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give me more advice</span>
        </button>
      </div>
    </div>
  );
};

export default App;
