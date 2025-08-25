import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-15rem)] h-14 
    rounded-4xl flex items-center px-6 
    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg justify-between">
      <nav className="flex w-full flex-row justify-between">
        
        <div className="">
          Logo
        </div>

        <div>
          Hyperlinks
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
