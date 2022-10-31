import React from "react";

const Header = () => {
  return (
    <header className="py-4 border-b-2 border-gray-400 absolute top-0 left-0 w-full px-16">
      <button className="font-semibold">Add Card</button>
      <button className="font-semibold ml-10">Sort Card</button>
    </header>
  );
};

export default Header;
