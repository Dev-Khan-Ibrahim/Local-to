import React from "react";

const Footer = ({ clearCompleted }) => {
  return (
    <div className="Footer">
      <div className="btn_complete">
        <button> Completed</button>
      </div>
      <div className="btn_clear">
        <button onClick={clearCompleted}>Clear</button>
      </div>
    </div>
  );
};

export default Footer;