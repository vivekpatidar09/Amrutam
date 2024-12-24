import React from "react";

function Header() {
  return (
    <div>
      {" "}
      <div className="h-14 flex lg:h-14 sm:h-20 items-center p-3 w-full bg-[#FFF7E2] ">
        <div className="flex items-center w-full ">
          <div className="absolute lg:hidden ">
            <img src="/Frame 1000005821.png" alt="menu" />
          </div>
          <div className="m-auto  lg:justify-start lg:m-0 flex justify-center">
            <img
              src="/logo.png"
              alt="logo"
              className="lg:max-w-[9rem] w-[10rem] xl:mx-10 lg:mx-10 sm:w-[12rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
