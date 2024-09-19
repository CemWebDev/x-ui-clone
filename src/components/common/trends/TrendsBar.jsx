import Search from "./Search";
import Subscribe from "./Subscribe";
import TrendsSection from "./TrendsSection";
import WhoToFollow from "./WhoToFollow";

const TrendsBar = () => {
  return (
    <aside className="w-[350px] hidden xl:flex flex-col gap-1">
      <Search />
      <Subscribe />
      <TrendsSection />
      <WhoToFollow />
    </aside>
  );
};

export default TrendsBar;
