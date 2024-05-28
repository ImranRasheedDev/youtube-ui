import React from "react";
import { Input } from "../ui/input";
import { Mic, Search } from "lucide-react";

const SearchFormHeader = () => {
  return (
    <form className="flex ">
      <div>
        <Input
          placeholder="Search"
          className="bg-[#121212] w-[362px] text-[#303030] border-[#303030] font-normal rounded-tr-none rounded-br-none h-10 "
        />
      </div>
      <div>
        <button className="w-16 h-10 border rounded-md rounded-tl-none rounded-bl-none border-[#303030] text-white bg-[#303030] flex items-center justify-center">
          <Search />
        </button>
      </div>
      <div>
        <button className="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center ml-2">
          <Mic />
        </button>
      </div>
    </form>
  );
};

export default SearchFormHeader;
