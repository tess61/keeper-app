import React from "react";

const d = new Date();

function Footer() {
  return (
    <footer>
      <p>
        Copyright <span>©</span> {d.getFullYear()}
      </p>
    </footer>
  );
}

export default Footer;
