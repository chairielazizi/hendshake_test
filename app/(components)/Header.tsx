import Link from "next/link";
import React from "react";
import { HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <nav className="text-black flex flex-row items-center w-full mx-auto bg-yellow-500 h-10 justify-between">
      <div className="flex flex-row">
        <Link href="/">
          <HiHome className="text-3xl ml-5 cursor-pointer" />
        </Link>
        {/* <Link href="/TodoForm">
          <HiBookOpen className="text-3xl ml-5 cursor-pointer" />
        </Link> */}
      </div>
      <div className="text-2xl mr-5 font-semibold">Hendshake Todo List</div>
    </nav>
  );
};

export default Header;
