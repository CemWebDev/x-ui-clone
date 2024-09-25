
import { useTab } from "../../store/tabs/hooks";
import TabItem from "../tabs/TabItem";

const Header = () => {
  const { activeTab, setActiveData } = useTab();

  return (
    <header className=" sticky top-0 z-40 backdrop-blur-lg">
      <div className="flex border-b border-neutral-500/50">
        <TabItem
          isActive={activeTab === "for-you"}
          onClick={() => setActiveData("for-you")}
        >
          For You
        </TabItem>
        <TabItem
          isActive={activeTab === "following"}
          onClick={() => setActiveData("following")}
        >
          Following
        </TabItem>
      </div>
    </header>
  );
};

export default Header;
