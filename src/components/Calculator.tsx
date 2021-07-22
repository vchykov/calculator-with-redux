import React from 'react';
import './Calculator.css';
import Screen from './Screen';
import Keyboard from './Keyboard';

function Calculator() {
  return (
      <div className="calculator">
        <Screen />
        <Keyboard />
      </div>
  );
}

export default Calculator;
