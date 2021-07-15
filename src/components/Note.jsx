import React from "react";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';

function Note(props) {


function triggerNote(event){
 const name=  (event.target.getAttribute('name'));

  if(name){
    props.showFull(props.id);
  }
}
  return (

    <div className="note" name="note" style={{backgroundColor:props.backgroundColor,color:props.color}} onClick={triggerNote}>
      <h1 name="title">{props.title.replace(/\n/g, " ").length<=24?props.title.replace(/\n/g, " "):props.title.replace(/\n/g, " ").substring(0,21)+"..."}</h1>
      <hr/>
      <p className="size" name="content">{props.content.replace(/\n/g, " ").length<=80?props.content.replace(/\n/g, " "):props.content.replace(/\n/g, " ").substring(0,68)+"...Read More"}</p>
      <button style={{backgroundColor:props.backgroundColor,color:props.color}} onClick={
        ()=>props.delete(props.id)
      }><DeleteForeverOutlinedIcon/></button>
    </div>
  );
}

export default Note;
