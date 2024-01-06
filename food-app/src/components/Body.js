import React from "react";
// import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData(searchTxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
  );
}

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6126255&lng=77.04108959999999&restaurantId=17518
const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5322291&lng=77.30731329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    // debugger;
    const json = await data.json();
    console.log("api data", json);
    const result =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setAllRestaurants(result);
    setFilteredRestaurants(result);
  }
  useEffect(() => {
    const data = getRestaurants();
  }, []);
  // console.log("render");

  return (
    <>
      <Box className="flex justify-end mb-3">
        <input
          type="search"
          placeholder="search Item."
          className="input-control"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="btn bg-gray-900 text-white ml-3 hover:bg-gray-700"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants?.length === 0 ? (
          <h1 className="text-center text-2xl text-red-700">
            no restaurants match your search
          </h1>
        ) : (
          filteredRestaurants?.map((restaurant, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <RestaurantCard restaurant={restaurant} />
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};

export default Body;
