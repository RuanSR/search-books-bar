import React, { useState } from "react";

function SearchBar({onSubmit}) {
  const url = "https://www.googleapis.com/books/v1/volumes"
  const [searchField, setSearchField] = useState("");
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault();
        onSubmit({url, searchField})
      }} className="m-2">
        <input
          onChange={(e) => {
            setSearchField(e.target.value);
          }}
          className=""
          type="text"
        />
        <button className="ml-2">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
