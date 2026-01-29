import React,{useState} from 'react'

function Calculator() {
    const [num1,setNum1]=useState("");
    const [num2,setNum2]=useState("");
    const a=Number(num1);
    const b=Number(num2);


  return (
    <div>
      <h1 style={{textDecorator:"underline"}}>Calculator</h1>
      <input type="number" placeholder="Enter the first value" onChange={(e)=>setNum1(e.target.value)}/>
      <input type="number" placeholder="Enter the second value"/>
      <div style={{height:"180px",width:"300px",border:"3px inset black",marginLeft:"530px",marginTop:"20px",backgroundColor:"lightblue",textAlign:"left"}}>
        <h3>Result :</h3>
        <p><strong>Addition :</strong>{a+b}</p>
        <p><strong>Subtraction :</strong>{a-b}</p>
        <p><strong>Multiplication :</strong>{a*b}</p>
        <p><strong>Division :</strong>
        {b==0 ?"can't divide by zero":a/b}
        </p>
        
      </div>
      
    </div>
  )
}

export default Calculator
