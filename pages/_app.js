import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(0);

  useEffect(() => {
    const calculateBMI = () => {
      const weightValue = Number(weight);
      const heightValue = Number(height);
      const isValidInput = weightValue > 0 && heightValue > 0;
      setBMI(isValidInput ? (weightValue / ((heightValue / 100) ** 2)).toFixed(2) : 0);
    };
    calculateBMI();
  }, [weight, height]);

  return (
    <div className="App">
      <h1>คำนวน BMI</h1>
      <div className="form-container">
        <form className="bmi-form">
          <label>Weight (kg): <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label>
          <br />
          <label>Height (cm): <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label>
        </form>
      </div>
      {bmi > 0 && <h2>Your BMI: {bmi}</h2>}
    </div>
  );
}

export default App;
