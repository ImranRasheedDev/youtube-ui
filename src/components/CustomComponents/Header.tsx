import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import SearchFormHeader from "./SearchFormHeader";
import IconsBarHeader from "./IconsBarHeader";

const Header = () => {
  return (
    <header className="bg-[#212121] text-white flex justify-between px-5 py-3">
      <div className="flex gap-5 items-center">
        <div>
          <Menu />
        </div>
        <div>
          <Image
            src={"/images/Youtube-Logo.png"}
            alt="Youtube Icon"
            width={90}
            height={20}
          />
        </div>
      </div>

      <SearchFormHeader />

      <IconsBarHeader />
    </header>
  );
};

export default Header;
