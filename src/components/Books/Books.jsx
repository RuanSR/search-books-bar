import React, { useState } from "react";

import Table from "../BookTable/Table";

function Books() {
  const [searchField, setSearchField] = useState("");
  
  return (
    <div>
      <input
        onChange={(e) => {
          setSearchField(e.target.value);          
        }}
        type="text"
      />
      <Table busca={searchField} />
    </div>
  );
}

export default Books;
