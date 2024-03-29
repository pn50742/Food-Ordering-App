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
    // console.log("api data", json);
    const resData = await checkData(json);
    setAllRestaurants(resData);
    setFilteredRestaurants(resData);
  }

  async function checkData(jsonData) {
    for (let i = 0; i < jsonData?.data?.cards.length; i++) {
      // initialize checkData for Swiggy Restaurant data
      let checkData =
        jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // if checkData is not undefined then return it
      if (checkData !== undefined) {
        return checkData;
      }
    }
  }
  useEffect(() => {
    const data = getRestaurants();
  }, []);
  // console.log("render");

  return (
    <>
      <div className="flex justify-end mb-3">
        <input
          type="search"
          placeholder="search Item."
          className="input-control"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
        />
        <button
          className="btn btn--primary ml-3"
          onClick={() => {
            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="row">
        {allRestaurants?.length === 0 ? (
          <Shimmer />
        ) : filteredRestaurants?.length === 0 ? (
          <div>
            <h1 className="text-center text-2xl text-red-700">
              no restaurants match your search
            </h1>
          </div>
        ) : (
          filteredRestaurants?.map((restaurant, index) => (
            <div key={index} className="col-4">
              <RestaurantCard restaurant={restaurant} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
