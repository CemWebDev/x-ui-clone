import { useTab } from "../../store/tabs/hooks";
import { trendsForYou } from "../../constant";
import TrendingItem from "../UI/TrendingItem";
import trends from "../../assets/trends-1.jpg";
const ForYou = () => {
  const { activeTab } = useTab("explore");

  return (
    activeTab === "for-you" && (
      <section>
        <div className="relative">
          <img
            src={trends}
            alt="Trends Event"
            className="relative -z-10 w-full"
            loading="lazy"
          />
          <div className="absolute bottom-4 left-5 text-xl text-white">
            <h1 className="font-semibold">Festival</h1>
            <h1>Music Festival &bull; LIVE</h1>
          </div>
        </div>
        <h1 className="text-[--text-color] font-semibold text-lg p-2">
          Trends for you
        </h1>
        {trendsForYou.map((topic) => (
          <TrendingItem
            key={topic.id}
            title={topic.title}
            category={topic.category}
            posts={topic.posts}
          />
        ))}
      </section>
    )
  );
};

export default ForYou;
