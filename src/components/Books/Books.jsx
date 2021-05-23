import React, { useState } from "react";

import { Button } from "react-bootstrap/";
import Table from "../BookTable/Table";

function Books() {
  const [searchField, setSearchField] = useState("");
  const [next, setNext] = useState(0);
  const [maxResults, setMaxResults] = useState(5);

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
      <Button variant="info" onClick={()=> {setNext(next+maxResults)}}>Próximos Resultados</Button>
      <Table busca={searchField} next={next} maxResults={maxResults}/>
    </div>
  );
}

export default Books;
