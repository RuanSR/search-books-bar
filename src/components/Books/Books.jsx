import React, { useState } from "react";

import Table from "../BookTable/Table";

function Books() {
  const [searchField, setSearchField] = useState("");

  return (
    <div className="container">
      <input
        onChange={(e) => {
          setSearchField(e.target.value);
        }}
        className="form-control m-2"
        type="text"
        placeholder="Digite o nome do livro"
      />
      <Table busca={searchField} />
    </div>
  );
}

export default Books;
