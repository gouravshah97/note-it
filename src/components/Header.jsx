import React from "react";
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import Clock from "./ShowClock.jsx";

function Header() {
  return (
    <header>
      <h1><SpeakerNotesIcon fontSize='medium'/>&nbsp;NOTE IT!!!</h1>
      <div className="clock"><Clock /></div>
    </header>
  );
}

export default Header;
