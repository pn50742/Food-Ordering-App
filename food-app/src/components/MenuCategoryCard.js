import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IMG_CDN_URL } from "../Config";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuCategoryCard = ({ ...props }) => {
  //   const [isOpen, setIsOpen] = useState(true);
  const dispatch = useDispatch();
  console.log("category card", props);
  const { title, itemCards, showItem, setShowIndex, setExpanderToggle } = props;
  const handleClick = () => {
    setShowIndex();
    setExpanderToggle();
  };
  const addhandler = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="relative border border-gray-300 rounded mt-5">
      <div className="card-menu p-0">
        <div className="card_header border-b border-gray-300 rounded">
          <button
            className="w-full p-3 text-left flex justify-between"
            onClick={handleClick}
          >
            <span className="text-lg font-bold">
              {title}({itemCards.length})
            </span>
            <span className={showItem ? "" : "rotate-180"}>
              {<IoIosArrowUp />}
            </span>
          </button>
        </div>
        <div className="card_body">
          {showItem
            ? itemCards.map((item, index) => {
                const { name, imageId, id, price, isVeg, isBestseller } =
                  item?.card?.info;
                return (
                  <div
                    className="flex justify-between border-b border-gray-200 p-5"
                    key={id}
                  >
                    <div>
                      {isVeg ? (
                        <div className="w-[18px] h-[18px] border-2 border-green-600 flex">
                          <div className="w-[10px] h-[10px] bg-green-600 rounded-full m-auto"></div>
                        </div>
                      ) : (
                        <div className="w-[18px] h-[18px] border-2 border-red-600 flex">
                          <div className="w-[10px] h-[10px] bg-red-600 rounded-full m-auto"></div>
                        </div>
                      )}
                      <h4 className="font-medium">
                        <span className="mr-2"> {name}</span>
                        {isBestseller ? (
                          <span className="bg-orange-300 text-gray-900 px-2 rounded text-xs">
                            Bestseller
                          </span>
                        ) : (
                          ""
                        )}
                      </h4>
                      <p>&#x20B9; {price / 100}</p>
                    </div>
                    <div className="relative">
                      <button className="w-[118px] h-[96px] rounded-[6px] object-cover">
                        <img
                          src={IMG_CDN_URL + imageId}
                          alt="image"
                          className="w-[118px] h-[96px]  object-cover rounded-[6px]"
                        />
                        <span
                          onClick={() => addhandler(item)}
                          className="bg-gray-800 text-white p-1 w-1/2 text-xs rounded absolute left-[30px] top-0"
                        >
                          Add+
                        </span>
                      </button>
                      {/* <button className="bg-black-800 text-white p-2 rounded absolute">
                        Add +
                      </button> */}
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default MenuCategoryCard;
