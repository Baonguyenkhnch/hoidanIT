import { useState } from "react";

const todonew =(props)=>{
  console.log("check point:",props);
  const {addNewtodo}=props;
  const [valueInput,setvalueInput]=useState("eric")


  const handleClick =()=>{
    addNewtodo(valueInput)
    // console.log("check",valueInput)
  }
  const handleOnchange =(name)=>{
    console.log("handleonChange",name)
    setvalueInput(name)
  }
  addNewtodo()
    return (
          <div className='todo-new'>
        <input type="text" onChange={(event)=>
          handleOnchange(event.target.value)
        }/>
        <button style={{cursor:"pointer"}} onClick={handleClick}>
          
          Add</button>
      </div>
    )
}
export default todonew ;