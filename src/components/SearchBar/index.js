import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <div>
      <div className="relative">
        <input
          type="text"
          className="text-gray-dark border rounded-md py-1 px-2 w-full h-10 focus:outline-none"
          placeholder="What are you looking for ?"
        />
        <SearchIcon
          fontSize="medium"
          className="absolute right-2 top-2 text-blue"
        />
      </div>
    </div>
  );
};

export default SearchBar;
