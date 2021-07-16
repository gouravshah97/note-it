import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import  uniqid from "uniqid";
import Pop from "./Pop.jsx";
function App() {

  const [noteList,setNoteList]=useState([]);
  const [showNote,setShowNote]=useState(false);
  const [activeNote,setActiveNote]=useState({
    title:"",
    content:"",
    color:"",
    backgroundColor:""
  });

  function addNote(note){

    setNoteList(prev=>{
      return(
        [...prev,note]
      );
    });
  }

  function deleteNote(id) {
    setNoteList(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  function renderFullNote(id){
    setActiveNote(noteList[id]);

    setShowNote(true);

  }

  function closeFullNote(modifiedNote,index){
   const arr=noteList;
   arr[index]=modifiedNote;
   setNoteList(arr);
    setShowNote(false);
  }

  function cancelEdit(){
    setShowNote(false);
  }






  return (<div className="wrap">
    <div className="container">
      <Header />
       {showNote && <Pop closeFullNote={closeFullNote} cancelEdit={cancelEdit} activeNote={activeNote} index={noteList.indexOf(activeNote)}/>}
      <CreateArea addNote={addNote}/>

      {noteList.map((publishNote,id)=>{
        return   <Note key={uniqid()} id={id}title={publishNote.title} content={publishNote.content} backgroundColor={publishNote.backgroundColor} color={publishNote.color} delete={deleteNote} showFull={renderFullNote}/>
      })}

   </div>

      <Footer />
    </div>
  );
}

export default App;
