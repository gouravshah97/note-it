import React ,{useState}from "react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Pop(props) {

  const [modifiedNote,setModifiedNote]=useState({
    title:props.activeNote.title,
    content:props.activeNote.content,
    color:props.activeNote.color,
    backgroundColor:props.activeNote.backgroundColor
  });
  const[showCross,setShowCross]=useState(true);

  function modify(event){

    console.log(event);
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
       <textarea  hidden rows="15" style={{backgroundColor:modifiedNote.backgroundColor,color:modifiedNote.color}} className="input-field"  name="content" onChange={modify} value={modifiedNote.content} autoComplete="off" >
       </textarea>

      <CKEditor name="content"
                editor={ ClassicEditor }
                data={modifiedNote.content}
                config={{
              /*  removePlugins:['MediaEmbed']*/
              toolbar: ['heading', '|', 'bold', 'italic', 'blockQuote', 'link', 'numberedList', 'bulletedList',  'insertTable',
         'tableColumn', 'tableRow', 'mergeTableCells',  '|', 'undo', 'redo']

          }}
                onChange={ ( event, editor ) => {
                    modifiedNote.content=editor.getData();

                } }

            />

 { document.documentElement.style.setProperty("--col",modifiedNote.backgroundColor)}
{document.documentElement.style.setProperty("--text-col",modifiedNote.color)}
      </div>

    </div>

  </div>

  );
}

export default Pop;
