import React, { useState } from "react";
// using the functional-based Components.
const Calculator = () => {
  const [screenValue, setscreenValue] = useState("");

  const onKeyPressHandler = (value) => {
    setscreenValue( screenValue + value);
  };
// this line clears the display.
  const clearDisplay = () => {
    setscreenValue("");
  };
// this is a try and catch error to handle possible arithemetic errors and make calculations.
  const arithemeticOperation= () => {
    try {
      setscreenValue(eval(screenValue).toString());
    } catch (error) {
      setscreenValue("Error");
    }
  };

  return (
<div className=" flex justify-center items-center h-[100svh] w-20">
  <div className=" p-9 h-[70%] bg-purple-500 rounded-md 2rem;">
     <div className=" flex justify-center items-center mt-8">
     <input type="text" value={screenValue} readOnly className=" w-[100%] h-12 flex items-center mb-6 " />
     </div>
      <div className=" grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 font-black text-2xl">
        <button onClick={() => clearDisplay()} className=" w-20 h-10 border ">C</button>
        <button onClick={() => onKeyPressHandler("0")} className=" w-20 h-10 border ">0</button>
        <button onClick={() => onKeyPressHandler("1")} className=" w-20 h-10 border ">1</button>
        <button onClick={() => onKeyPressHandler("2")} className=" w-20 h-10 border ">2</button>
        <button onClick={() => onKeyPressHandler("3")} className=" w-20 h-10 border ">3</button>
        <button onClick={() => onKeyPressHandler("4")} className=" w-20 h-10 border ">4</button>
        <button onClick={() => onKeyPressHandler("5")} className=" w-20 h-10 border ">5</button>
        <button onClick={() => onKeyPressHandler("7")} className=" w-20 h-10 border ">7</button>
        <button onClick={() => onKeyPressHandler("6")} className=" w-20 h-10 border ">6</button>
        <button onClick={() => onKeyPressHandler("8")} className=" w-20 h-10 border ">8</button>
        <button onClick={() => onKeyPressHandler("9")} className=" w-20 h-10 border ">9</button>
        <button onClick={() => onKeyPressHandler("-")} className=" w-20 h-10 border ">-</button>
        <button onClick={() => onKeyPressHandler("+")} className=" w-20 h-10 border ">+</button>
        <button onClick={() => onKeyPressHandler("*")} className=" w-20 h-10 border ">*</button>
        <button onClick={() => onKeyPressHandler("/")} className=" w-20 h-10 border ">/</button>
        <button onClick={() => onKeyPressHandler(".")} className=" w-20 h-10 border ">.</button>
        <button onClick={() => arithemeticOperation()} className=" w-20 h-10 border ">=</button>
      </div>
    </div>
</div>
  );
};


  

export default Calculator