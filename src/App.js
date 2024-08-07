import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './PassChar';

function App() {

  let [uppercase, setUppercase] = useState(false)
  let [lowercase, setLowercase] = useState(false)
  let [number, setNumber] = useState(false)
  let [symbol, setSymbol] = useState(false)
  let [passwordlen, setPasswordLen] = useState(8)
  let [fPass, setFpass] = useState('')

  let createPassword = () =>{
    let finalPass = ''
    let charSet=''
    if(uppercase || lowercase || number || symbol){
      if(uppercase) charSet +=UC;
      if(lowercase) charSet +=LC;
      if(number) charSet +=NC;
      if(symbol) charSet +=SC;

      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
     setFpass(finalPass)
    }
    else{
      alert("Please select atleast one Checkbox...")
    }
  }
  let copyPass = () =>{
    navigator.clipboard.writeText(fPass) // Navigator is a javascript object
  }

  return (
    <>
      <div className="passwordBox">
        <h2>Password Generator</h2>
        <div className="passwordBoxin">
          <input type="text" value={fPass} readOnly ></input> 
          <button onClick={copyPass}>Copy</button>
        </div>
        <div className="passLength">
          <label>Password Length</label>
          <input type="number" value={passwordlen} onChange={(event) => setPasswordLen(event.target.value)} min={8} max={20} />
        </div>
        <div  className="passLength">
          <label>Include uppercase letters</label>
          <input type="checkbox" checked={uppercase} onChange={()=> setUppercase(!uppercase)}/>
        </div>
        <div className="passLength">
          <label>Include lowercase letters</label>
          <input type="checkbox" checked={lowercase} onChange={()=> setLowercase(!lowercase)}/>
        </div>
        <div className="passLength">
          <label>Include Numbers</label>
          <input type="checkbox" checked={number} onChange={()=> setNumber(!number)}/>
        </div>
        <div className="passLength">
          <label>Include Symbols</label>
          <input type="checkbox" checked={symbol} onChange={()=> setSymbol(!symbol)}/>
        </div>
        <button className="btn"  onClick={createPassword}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
