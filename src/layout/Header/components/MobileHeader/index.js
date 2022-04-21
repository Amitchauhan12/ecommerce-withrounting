import React from "react";
import { SearchBar } from "components";

const MobileHeader = () => {
  return (
    <div className="flex space-x-2 items-center px-2 py-4 bg-gray-lightest">
      <div>
        <img
          src="https://z.nooncdn.com/s/app/com/noon/images/logos/noon-black-en.svg"
          width="120px"
        />
      </div>
      <div className="w-full">
        <SearchBar />
      </div>
    </div>
  );
};

export default MobileHeader;
