import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-5rem)] h-14 
    rounded-4xl flex items-center px-6 
    bg-white/10 backdrop-blur-md border border-white/20 shadow-lg justify-between"
      >
        <div>Logo</div>

        <div>hyperlinks</div>
      </nav>
    </div>
  );
};

export default Navbar;
