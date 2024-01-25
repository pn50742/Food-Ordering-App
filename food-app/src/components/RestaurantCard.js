import React from "react";
import Card from "@mui/material/Card";
import Badge from "@mui/material/Badge";
import { IMG_CDN_URL } from "../Config";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
  console.log("restaurantId", restaurant.info);
  const { name, cloudinaryImageId, cuisines, id, isOpen } = restaurant.info;
  return (
    <div className="card">
      <Link to={`restaurant/${id}`}>
        <div
          style={{ overflow: "hidden", height: "200px", borderRadius: "6px" }}
        >
          {isOpen ? (
            <button className="bg-green-700 text-white p-2 absolute top-[15px] rounded right-[15px] text-xs">
              Online delivery Available
            </button>
          ) : (
            ""
          )}
          <img
            src={IMG_CDN_URL + cloudinaryImageId}
            alt="burger King"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <h2 className="text-md mt-3">{name}</h2>
        {cuisines?.length > 3 &&
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
      </Link>
    </div>
  );
};

export default RestaurantCard;
