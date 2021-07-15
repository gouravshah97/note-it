import React,{useState} from "react";

function formatAMPM(date) {

  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var dayName = days[date.getDay()];
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime =dayName + ', '+ hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function Clock(){
  const[time,updateTime]=useState();
  function updateTimeHook(){
    let updatedTime=formatAMPM(new Date);
    updateTime(updatedTime);
  }

  setInterval(updateTimeHook,1000);
  return <p>{time}</p>;
}

export default Clock;
