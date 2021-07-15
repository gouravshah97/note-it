import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} -Created by Gourav Shah</p>
    </footer>
  );
}

export default Footer;
