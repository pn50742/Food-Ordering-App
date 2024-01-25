import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import { PiClockCountdownFill } from "react-icons/pi";
import { TbCoinRupee } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";
import MenuCategoryCard from "./MenuCategoryCard";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const params = useParams();
  const { id } = params;
  const restaurantMenu = useRestaurentMenu(id);
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>look like yiu are offline.. Check your internet connection</h1>;
  }
  if (restaurantMenu === null) return <Shimmer />;
  console.log("restaurantMenu 2", restaurantMenu[2]);
  const Itemcards =
    restaurantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log("Itemcards", Itemcards);
  const category = Itemcards.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("category", category);
  return (
    <div className="w-2/3 mx-auto">
      <div className="py-5 flex justify-between border-b border-gray-300">
        <div className="text-left">
          <h1 className="text-xl mb-3 font-semibold">
            {restaurantMenu[0]?.card?.card?.info?.name}
          </h1>
          {/* <h1>{name}</h1> */}
          <p className="text-gray-500 text-sm">
            {restaurantMenu[0]?.card?.card?.info?.cuisines.join(", ")}
          </p>
          <p className="text-gray-500 text-sm">
            {restaurantMenu[0]?.card?.card?.info?.areaName} |{" "}
            {restaurantMenu[0]?.card?.card?.info?.sla?.lastMileTravelString} |
            {restaurantMenu[0]?.card?.card?.info?.sla?.slaString}
          </p>
        </div>
        <div>
          <div className="border-2 p-3 rounded text-center">
            <h2 className="text-xl text-green-700">
              {restaurantMenu[0]?.card?.card?.info?.avgRating}
            </h2>
            <p className="text-sm text-gray-500">
              {restaurantMenu[0]?.card?.card?.info?.totalRatingsString}
            </p>
          </div>
        </div>
      </div>
      <div className="flex pt-5">
        <div className="flex">
          {
            <h3 className="font-bold text-gray-600 mr-10">
              <PiClockCountdownFill /> Currently
              {/* {
            restaurantMenu[0]?.card?.card?.info
              ?.availabilityServiceabilityMessage
          } */}
            </h3>
          }
          {
            <h3 className="font-bold text-gray-600">
              <TbCoinRupee />
              {restaurantMenu[0]?.card?.card?.info?.costForTwoMessage}
            </h3>
          }
        </div>
      </div>
      <div className="flex mt-3 mx-[-10px]">
        {restaurantMenu[0]?.card?.card?.info?.aggregatedDiscountInfo?.descriptionList.map(
          (item, index) => {
            const arr = item.meta.split(" | ");
            // console.log("met string", arr);
            return (
              <div className="px-[10px] w-1/4" key={index}>
                <div className="card drop-shadow-none border border-gray-200 flex">
                  <p
                    style={{ color: "rgb(228, 109, 71)" }}
                    className="offer-tag"
                  >
                    {item.discountType.toUpperCase()} DEAL
                  </p>
                  <div className="pl-4 text-sm">
                    <p className="font-semibold">
                      <BiSolidOffer className="mr-1 fill-amber-800" />
                      {arr[0]}
                    </p>
                    <p className="text-gray-500">
                      <span className="pr-2">{arr[1]}</span>| Above &#x20b9; 999
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      {category.map((item, index) => {
        const { title, itemCards } = item?.card?.card;
        return (
          <MenuCategoryCard
            {...item?.card?.card}
            showItem={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
          // <div className="relative" key={index}>
          //   <div className="card">
          //     <div className="card_header">
          //       <h1 className="text-lg font-bold">{title}</h1>
          //     </div>
          //     <div className="card_body">
          //       {itemCards.map((item, index) => {
          //         const { name, category, description } = item?.card?.info;
          //         return (
          //           <div className="card">
          //             <h4>{name}</h4>
          //             <p>{category}</p>
          //             <p>{description}</p>
          //           </div>
          //         );
          //       })}
          //     </div>
          //   </div>
          // </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
