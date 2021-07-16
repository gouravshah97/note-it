import React from "react";
import ReactHtmlParser from 'react-html-parser';


function NoteContent(props){


  console.log(ReactHtmlParser(props.text));


   return(
     <div readOnly className="size" name="content">{ReactHtmlParser(props.text)}</div>
   );

}


export default NoteContent;
