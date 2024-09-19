import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar";
import TrendsBar from "../components/common/trends/TrendsBar";

const Root = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex font-poppins">
      <Sidebar />
      <main className="flex-1 border-x border-neutral-800/90 mr-7">
        <Outlet />
      </main>
      <TrendsBar />
    </div>
  );
};

export default Root;
