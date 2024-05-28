import React from "react";
import NavigationItem from "./NavigationItem";
import {
  Compass,
  Gamepad2,
  History,
  Home,
  LandPlot,
  MonitorPlay,
  Radio,
  SquarePlay,
  ThumbsUp,
  Youtube,
} from "lucide-react";
import ShowMoreButton from "./ShowMoreButton";

const Sidebar = () => {
  return (
    <div>
      <div className="border-b border-[#303030] pb-4 mb-4">
        <NavigationItem active={true} icon={<Home />} text="Home" />
        <NavigationItem icon={<Compass />} text="Explore" />
        <NavigationItem icon={<Youtube />} text="Subscriptions" />
      </div>
      <div className="border-b border-[#303030] pb-4 mb-4">
        <NavigationItem icon={<SquarePlay />} text="Lİbrary" />
        <NavigationItem icon={<History />} text="History" />
        <NavigationItem icon={<MonitorPlay />} text="Your Videos" />
        <NavigationItem icon={<ThumbsUp />} text="Liked Videos" />
        <ShowMoreButton />
      </div>
      <div className="border-b border-[#303030] pb-4 mb-4">
        <h2 className="text-[#AAAAAA] font-bold text-sm px-5 mb-2">
          SUBSCRIPTIONS
        </h2>
        <NavigationItem image="/images/User-Avatar.png" text="James Gouse" />
        <NavigationItem image="/images/User-Avatar.png" text="Alan Cooper" />
        <NavigationItem image="/images/User-Avatar.png" text="Marcus Levin" />
        <NavigationItem image="/images/User-Avatar.png" text="Alexis Sears" />
        <NavigationItem image="/images/User-Avatar.png" text="Jesica Lambert" />
        <NavigationItem image="/images/User-Avatar.png" text="Anna White" />
        <NavigationItem image="/images/User-Avatar.png" text="Skylar Dias" />
        <ShowMoreButton text="Show 13 more" />
      </div>
      <div className="border-b border-[#303030] pb-4 ">
        <h2 className="text-[#AAAAAA] font-bold text-sm px-5 mb-2">
          MORE FROM YOUTUBE
        </h2>
        <NavigationItem icon={<Youtube />} text="Youtube Premium" />
        <NavigationItem icon={<Gamepad2 />} text="Gaming" />
        <NavigationItem icon={<Radio />} text="Live" />
        <NavigationItem icon={<LandPlot />} text="Sports" />
        <ShowMoreButton />
      </div>
    </div>
  );
};

export default Sidebar;
