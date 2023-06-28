import React, { useState } from "react";
import './Enter.scss';

const Enter=({addTodo})=>{

    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const [Submitted,setSubmitted]=useState(false);

    const submit=(e)=>{
        e.preventDefault();
        if(!title||!desc)
        {

        }

        else
        {
          addTodo(title,desc);
          setSubmitted(true);

          setTimeout(()=>{
              setSubmitted(false);
              setTitle("");
              setDesc("");
          },3000);
        }
    }
  
    return(

        <div className="container">
            
        {Submitted && <h3 className="h3"> Successfully Added!</h3>}

        <h2 >Enter Task</h2>
        {(!title || !desc) && <h3 className="warning">Please enter {(!title && "title") || (!desc && "description")}</h3>}
        <form onSubmit={submit}>
            <div className="Task-Title">
            <label>Enter Title : </label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>

            <div className="Task-desc">
            <label>Enter desc : </label>
            <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}></input>
            </div>
            <button type="submit" >Add</button>
            

        </form>
        </div>
    )
}

export default Enter;