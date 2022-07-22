
import { fireEvent } from '@testing-library/react';
import { useState } from 'react';
import './App.css';

function App() {

  const [calc, setCalc] = useState('')
  const [result, setResult] = useState('')
  const ops = ['/', '*', '+', '-', '.']

  const createDigits = () => {
    const digits = []
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button key={i}
          onClick={() => updateCalc(i)}>{i}</button>
      )
    }
    return digits
  }

  const updateCalc = value => {
    if (ops.includes(value) && calc == '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return
    }
    setCalc(calc + value)
    setResult(eval(calc + value).toString())
  }

  const clear = () => {
    setCalc('')
    setResult('')
  }

  const calculate = () => {
    setCalc(eval(calc).toString())
  }

  return (
    <div className="App">
      <div className="calc">
        <div className="result">
          {result ? < span className='res'>({result})</span> : ''}<span>{calc || 0}</span>
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={clear}>C</button>
        </div>
        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div >
  );
}

export default App; 