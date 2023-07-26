import React, { useState } from 'react';

const Calculator = () => {
  const [screenValue, setscreenValue] = useState('');

  const handlekeyPress = (value) => {
    setscreenValue(screenValue + value);
  };

  const arithemeticOperations = () => {
    try {
      setscreenValue(eval(screenValue).toString());
    } catch (error) {
      setscreenValue('Error');
    }
  };

  const handleClearValue = () => {
    setscreenValue('');
  };

  return (
    <div className="" >
      <div className="display">{screenValue}</div>
      <div className="">
          <button onClick={() => handlekeyPress('7')}>7</button>
          <button onClick={() => handlekeyPress('8')}>8</button>
          <button onClick={() => handlekeyPress('9')}>9</button>
          <button onClick={() => handlekeyPress('+')}>+</button>
          <button onClick={() => handlekeyPress('4')}>4</button>
          <button onClick={() =>handlekeyPress('5')}>5</button>
          <button onClick={() => handlekeyPress('6')}>6</button>
          <button onClick={() => handlekeyPress('-')}>-</button>
          <button onClick={() => handlekeyPress('1')}>1</button>
          <button onClick={() => handlekeyPress('2')}>2</button>
          <button onClick={() => handlekeyPress('3')}>3</button>
          <button onClick={() => handlekeyPress('*')}>*</button>
          <button onClick={() => handlekeyPress('0')}>0</button>
          <button onClick={() => handlekeyPress('.')}>.</button>
          <button onClick={handleClearValue}>C</button>
          <button onClick={() => handlekeyPress('/')}>/</button>
          <button onClick={arithemeticOperations}>=</button>
        </div>
      </div>
  );
};

export default Calculator;
