import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between  z-[100] w-full absolute px-5">
      <img src="./logo.png" alt="" className="w-[150px]" />
      <div>
        {/* {console.log("heheh")} */}

        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
