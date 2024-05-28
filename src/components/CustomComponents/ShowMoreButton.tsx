import { ChevronDown } from "lucide-react";
import React from "react";

interface IShowMoreButton {
    text?: string
}

const ShowMoreButton = ({text = 'Show More'} : IShowMoreButton) => {
  return (
    <button className="flex gap-6 items-center  py-3 pl-5">
      <span>
        <ChevronDown />
      </span>
      <span>{text}</span>
    </button>
  );
};

export default ShowMoreButton;
