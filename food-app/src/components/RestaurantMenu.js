import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Shimmer } from "react-shimmer";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState({});
  console.log("usestate()", useState());
  const params = useParams();
  const { id } = params;
  // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=17518
  useEffect(() => {
    getRestaurantInfo();
  }, []);
  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=${id}`
    );
    const json = await data.json();
    console.log("menu data", json.data.cards);
    setRestaurantMenu(json?.data?.cards);
  }
  // const { name, cloudinaryImageId, avgRating, cuisines, totalRatingsString } =
  // const { name } = restaurantMenu[0]?.card?.card?.info;
  return !restaurantMenu ? (
    <Shimmer />
  ) : (
    <div>
      <Card className="p-5 flex justify-between">
        <div className="text-left">
          <h1 className="text-3xl mb-3">
            {restaurantMenu[0]?.card?.card?.info?.name}
          </h1>
          {/* <h1>{name}</h1> */}
          <p>{restaurantMenu[0]?.card?.card?.info?.cuisines.join(", ")}</p>
        </div>
        <div>
          <Card sx={{ background: "#f5f5f5", padding: "15px" }}>
            <h2 className="text-xl text-green-700">
              {restaurantMenu[0]?.card?.card?.info?.avgRating} Stars
            </h2>
            <p className="text-sm text-gray-500">
              {restaurantMenu[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </Card>
        </div>
      </Card>
      <Card></Card>
    </div>
  );
};

export default RestaurantMenu;
