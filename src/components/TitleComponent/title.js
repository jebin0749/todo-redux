import React from "react";
import titlecss from "./title.module.scss";

const Title = (props) => {
  // const remaining=props.todo.length;

  // const getTitle=(remaining)=>{
  // if(remaining===0)
  // {
  //     return <h1>Hurray! <span>{remaining}</span> Tasks left</h1>
  // }
  // else{
  //     return <h1><span>{remaining}</span> Tasks In List.</h1>
  // }
  // };

  return (
    <div className={titlecss.title}>
      {/* {getTitle(remaining)} */}
      <h1> TODO TITLE</h1>
    </div>
  );
};

export default Title;
