import { useState } from 'react';
import './App.css';

function Key({label, clickHandler, className}){
  return(
    <button onClick={clickHandler} className={className}>
      {label}
    </button>
    
  );
}

function Display({display}){
  return(
    <div className="Display">
      {display}
    </div>
  );
}


function App() {
  const[disp, setdisp] = useState("10 Things That Require Zero Talent");
  const[num1, setnum1] = useState(null);
  const[num2, setnum2] = useState(null);
  const[op, setop] = useState(null);


  const oneclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    
      setdisp("Being On Time");
    
  }
  const messages = {
    1: "Being On Time",
    2: "Making An Effort",
    3: "Being High Energy",
    4: "Having A Positive Attitude",
    5: "Being Passionate",
    6: "Using Good Body Language",
    7: "Being Coachable",
    8: "Doing A Little Extra",
    9: "Being Prepared",
    0: "Having A Strong Work Ethic"
  };
  
  const numclickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
  
    if (messages[value]) {
      console.log(messages[value]); 
      setdisp(messages[value]);
    } else {
      console.log("Invalid key pressed");
    }
  };
  

  const clearclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp("10 Things That Require Zero Talent");
    setop(null);
    setnum1(null);
    setnum2(null);
  }
  
  const nameclickHandler = (e) => {
    e.preventDefault();
    const value  = e.target.innerHTML;
    console.log(value);
    setdisp("JOHN LEO MEDINA");
  }

  return (
    <div className="Calculator">
      <h1>JOHN LEO MEDINA IT-3A</h1>
      <div className="Calcontainer">
        <div className="Displaycon">
        <Display display ={disp}/>
        </div>
        <div className="Buttons">
          <Key label={7} clickHandler={numclickHandler}/> 
          <Key label={8} clickHandler={numclickHandler}/>
          <Key label={9} clickHandler={numclickHandler}/>
          
          <Key label={4} clickHandler={numclickHandler}/>
          <Key label={5} clickHandler={numclickHandler}/>
          <Key label={6} clickHandler={numclickHandler}/>
          
          <Key label={1} clickHandler={oneclickHandler}/>
          <Key label={2} clickHandler={numclickHandler}/>
          <Key label={3} clickHandler={numclickHandler}/>
          
          <Key className="clear-Key" label={'C'} clickHandler={clearclickHandler}/>
          <Key label={0} clickHandler={numclickHandler}/>
          
          
          <Key className="MEDINA" label ={'MEDINA'} clickHandler={nameclickHandler}/>
        </div>
      </div>
      
    </div>
  );
}

export default App;