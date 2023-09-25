"use client";
import React, { useState } from "react";
import { SearchMenuFacture } from ".";

const SearchBar = () => {
  const [manuFacture, setManuFacture] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchMenuFacture
          manuFacture={manuFacture}
          setManuFacture={setManuFacture}
        />
      </div>
    </form>
  );
};

export default SearchBar;
