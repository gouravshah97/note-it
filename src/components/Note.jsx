import React from "react";
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import NoteContent from './NoteContent.jsx';
import EditIcon from '@material-ui/icons/Edit';

function Note(props) {


function triggerNote(event){

    props.showFull(props.id);

}
  return (

    <div className="note" name="note" style={{backgroundColor:props.backgroundColor,color:props.color}}>
      <h1 name="title">{props.title.replace(/\n/g, " ").length<=24?props.title.replace(/\n/g, " "):props.title.replace(/\n/g, " ").substring(0,21)+"..."}</h1>
      <hr/>
      <NoteContent text={props.content}/>

      <button style={{backgroundColor:props.backgroundColor,color:props.color}} onClick={triggerNote}><EditIcon /></button>
      <button style={{backgroundColor:props.backgroundColor,color:props.color}} onClick={
        ()=>props.delete(props.id)
      }><DeleteForeverOutlinedIcon/></button>
    </div>
  );
}

export default Note;
