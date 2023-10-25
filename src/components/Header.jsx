import React from "react";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";

const Header = () => {
  const totalFollowers = 23004;

  return (
    <header className="flex justify-between items-center px-40 py-12 rounded-b-2xl">
      <div className="flex flex-col gap-2">
        <PrimaryText 
          textContent="Social Media Dashboard" 
          fontSize="text-3xl" 
        />
        <SecondaryText textContent={`Total Followers: ${totalFollowers}`} />
      </div>
      <div>
        <SecondaryText textContent="Light Mode" />
      </div>
    </header>
  );
};

export default Header;
