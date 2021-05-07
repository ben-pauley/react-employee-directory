import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <p>
        Use the search box to find employees by name and click the column
        headings to sort.
      </p>
    </div>
  );
}

export default Header;
