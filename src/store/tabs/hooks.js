import { useDispatch, useSelector } from "react-redux";
import { _setActiveTab } from "./index";

export const useTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.tab.activeTab);

  const setActiveData = (tab) => {
    dispatch(_setActiveTab(tab));
  };

  return { activeTab, setActiveData };
};
