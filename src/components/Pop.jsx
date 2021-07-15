import React ,{useState}from "react";


function Pop(props) {

  const [modifiedNote,setModifiedNote]=useState({
    title:props.activeNote.title,
    content:props.activeNote.content,
    color:props.activeNote.color,
    backgroundColor:props.activeNote.backgroundColor
  });
  const[showCross,setShowCross]=useState(true);

  function modify(event){
      const {name,value} = event.target;
    setModifiedNote(prev=>{
      return({
        ...prev,
        [name]:value
      });
    })
    if(value.trim()===''){
      setShowCross(false);
    }else{
      setShowCross(true);
    }
  }


  return (

    <div id="myModal" className="modal" >

    <div className="modal-content" style={{backgroundColor:modifiedNote.backgroundColor,color:modifiedNote.color}} >
      <div className="modal-header">
        {showCross && <span className="close" onClick={()=>props.closeFullNote(modifiedNote,props.index)}>&times;</span>}
        <input type="text" style={{backgroundColor:modifiedNote.backgroundColor,color:modifiedNote.color}} className="input-field" contentEditable="true" name="title" onChange={modify} value={modifiedNote.title} autoComplete="off"/>
      </div>
      <hr/>
      <div className="modal-body" style={{backgroundColor:modifiedNote.backgroundColor,color:modifiedNote.color}}>
        <textarea rows="15" style={{backgroundColor:modifiedNote.backgroundColor,color:modifiedNote.color}} className="input-field" contentEditable="true" name="content" onChange={modify} value={modifiedNote.content} autoComplete="off" />

      </div>

    </div>

  </div>

  );
}

export default Pop;
