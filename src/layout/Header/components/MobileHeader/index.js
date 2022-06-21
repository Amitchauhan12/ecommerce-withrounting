import React from "react";
import { SearchBar } from "components";

const MobileHeader = () => {
  return (
    <div className="flex space-x-2 items-center px-2 py-4 bg-gray-lightest">
      <div>
        <img src="/img/bh-logo.png" width="60px" style={{ marginRight: 50 }} />
      </div>
      <div className="w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileHeader;
