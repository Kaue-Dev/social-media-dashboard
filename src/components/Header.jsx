import React from "react";
import PrimaryText from "./PrimaryText";
import SecondaryText from "./SecondaryText";

const Header = () => {
  const totalFollowers = 23004;

  return (
    <header className="flex justify-around items-center pt-8 pb-32 bg-topDarkBg rounded-b-2xl relative">
      <div>
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
