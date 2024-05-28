import Image from "next/image";
import React from "react";

interface ICard {
  image: string;
  profile: string;
  title: string;
  profileName: string;
  views: string;
  postTime: string;
}

const Card = ({
  image,
  profile,
  title,
  profileName,
  views,
  postTime,
}: ICard) => {
  return (
    <div>
      <div className="mb-4">
        <Image
          src={image}
          alt=""
          width={276}
          height={160}
          className="w-full h-40 object-cover"
        />
      </div>
      <div className="flex gap-3">
        <div className="w-10">
          <Image
            src={profile}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 object-cover rounded-full"
          />
        </div>
        <div className="w-full">
          <h2 className="font-bold text-base mb-2">{title}</h2>
          <p className="text-[#AAAAAA] text-sm">{profileName}</p>
          <p className="text-[#AAAAAA] text-sm">
            {views} Views .{postTime} ago
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
