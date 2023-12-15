import React from "react";
// import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { restaurantList } from "../Config";
import RestaurantCard from "./RestaurantCard";
import TextField from "@mui/material/TextField";

// const getFoodItem = () => {
//   axios
//     .get(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5322291&lng=77.30731329999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
//     )
//     .then((data) => console.log("data", data.data.data.cards[2].card));
// };

const Body = () => {
  // useEffect(() => getFoodItem(), []);
  return (
    <>
      <Box className="flex justify-end mb-3">
        <TextField
          id="outlined-search"
          label="search food.."
          type="search"
          className="bg-white"
        />
      </Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}
      >
        {restaurantList.map((restaurant, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <RestaurantCard restaurant={restaurant} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Body;
