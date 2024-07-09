import React, { FC } from "react";

import filledStar from "@assets/icons/Star_fill.svg";

interface CardProps {
  tagName?: boolean;
  soldOut?: boolean;
  price: string;
  coffeeImage: string;
  coffeeName: string;
  rating?: string;
  votes?: string;
}

const Card: FC<CardProps> = ({
  tagName,
  soldOut,
  price,
  coffeeImage,
  coffeeName,
  rating,
  votes,
}) => {
  return (
    <div className="flex flex-col items-start gap-3">
      <div className="relative">
        <img alt="coffee img" src={coffeeImage} className="rounded-lg" />
        {tagName && (
          <div className="bg-mustard-yellow rounded-full w-fit h-fit px-2 py-1 absolute top-1 left-1">
            <p className="text-jet-black text-label font-bold">Popular</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex">
          <p className="text-ivory-white font-bold flex-1">{coffeeName}</p>
          <div className="bg-mint-green rounded-md p-1 flex-none flex items-center">
            <p className="text-jet-black text-price-text font-bold">${price}</p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 ">
          <img src={filledStar} alt="rating-icon" />
          <p className="text-ivory-white font-bold">
            {rating} <span className="text-slate-gray">({votes} votes)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
