import React from "react";
import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import { IMG_CDN_URL } from "../Config";

const RestaurantCard = ({ restaurant }) => {
  const { name, cloudinaryImageId, cuisines } = restaurant.info;
  return (
    <Card sx={{ padding: "15px", height: "100%" }}>
      <div style={{ overflow: "hidden", height: "200px", borderRadius: "6px" }}>
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="burger King"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
      <h2 className="text-md mt-3">{name}</h2>
      {cuisines.length > 3 &&
        cuisines.map((item, index) => (
          <Badge
            sx={{
              backgroundColor: "rgb(255 226 129)",
              margin: "5px",
              padding: "5px",
              borderRadius: "5px",
              fontSize: "12px",
            }}
          >
            {item}
          </Badge>
        ))}
      {/* <p className="text-sm mt-3">{restaurant.info.cuisines.join(", ")}</p> */}
    </Card>
  );
};

export default RestaurantCard;
