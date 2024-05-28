import Image from "next/image";
import Link from "next/link";
import React from "react";

interface INavigationItem {
  image?: string;
  text?: string;
  link?: string;
  icon?: React.ReactNode;
  active?: boolean;
}

const NavigationItem = ({
  image,
  icon,
  text,
  link = "#",
  active = false,
}: INavigationItem) => {
  return (
    <Link
      href={link}
      className={`${
        active ? "bg-[#303030]" : "bg-transparent"
      } flex gap-6 items-center  py-3 pl-5`}
    >
      {image && (
        <span>
          <Image
            src={image}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6 rounded-full object-cover"
          />
        </span>
      )}
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </Link>
  );
};

export default NavigationItem;
