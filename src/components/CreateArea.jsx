import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';

function CreateArea(props) {
  const [input, setInput] = useState({title: "",content: "",color:"#000000",backgroundColor:"#ffffff"});
  const [readyToWrite,setReadyToWrite]=useState(false);
  function handleInput(event) {
    const {name,value} = event.target;

    setInput(prev=>{
      return({
        ...prev,
        [name]:value
      });
    })
  }

  function saveNote(event){
    event.preventDefault();
    if(!(input.title.trim()==="" || input.content.trim()==="" )){
      props.addNote(input);
    
      setInput({title: "",content: "",color:"#000000",backgroundColor:"#ffffff"});
      setReadyToWrite(false);
    }


  }

  function writingDetected(){
    setReadyToWrite(true);
  }


  return (
     <div>

    <form className="create-note" style={{backgroundColor:input.backgroundColor}}>
    {readyToWrite && <div><input name = "title"  placeholder = "Title" style={{backgroundColor:input.backgroundColor,color:input.color}} onChange = {handleInput} value = {input.title} autoComplete = "off" / ><hr /></div>}

    <textarea name = "content" placeholder = "Start jotting down...." rows = {readyToWrite?"5":"1"} onClick={writingDetected} onChange = {handleInput} value = {input.content} style={{backgroundColor:input.backgroundColor,color:input.color}}/>
    { readyToWrite &&
      <div className="note-color">
        <hr/>
        <div className="note-background-color color">
         <span className="color-label">Select background color</span><input type="color" onChange = {handleInput} name="backgroundColor" value = {input.backgroundColor}/>
         </div>
         <div className="note-text-color color">
          <span className="color-label" >Select Text color</span><input type="color" onChange = {handleInput} name="color" value = {input.color}/>
          </div>
      </div> }
    <Zoom in={readyToWrite}><Fab onClick={saveNote}> <AddIcon /> < /Fab></Zoom>
     </form>
      </div>
  );
}

export default CreateArea;
