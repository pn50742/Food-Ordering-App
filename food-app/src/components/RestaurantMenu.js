import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Shimmer } from "react-shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurantMenu = useRestaurentMenu(id);
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>look like yiu are offline.. Check your internet connection</h1>;
  }

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
