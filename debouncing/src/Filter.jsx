import React, { useState } from "react";

const products = ["Oranges", "Grapes", "aPPle", "bAnana"];

const Filter = () => {
  const [query, setQuery] = useState("");

  const filteredList = products.filter(elem =>
    elem.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Filter</h1>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fruit..."
      />

      <ul>
        {filteredList.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
