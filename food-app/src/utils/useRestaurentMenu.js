import { useEffect, useState } from "react";
import { MENU_API } from "../Config";

const useRestaurentMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log("menu data", json.data.cards);
    setResInfo(json?.data?.cards);
  };
  return resInfo;
};

export default useRestaurentMenu;
