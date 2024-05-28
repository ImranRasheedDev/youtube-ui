import Card from "@/components/CustomComponents/Card";
import CategoryItemCom from "@/components/CustomComponents/CategoryItemCom";
const cardData = [
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
  {
    image: "/images/Images.png",
    profile: "/images/User-Avatar.png",
    title: "Lorem ipsum dolor sit amet, consecte  adipiscing elit.",
    profileName: "James Gouse",
    views: "15K",
    postTime: "1 week",
  },
];

export default function Home() {
  return (
    <main>
      <div>
        <CategoryItemCom />
      </div>
      <div className="grid grid-cols-4 gap-4 p-5">
        {cardData.map((item, index) => {
          return (
            <div key={index}>
              <Card
                image={item.image}
                postTime={item.postTime}
                profile={item.profile}
                profileName={item.profileName}
                title={item.title}
                views={item.views}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
