import React from "react";
import Deals from "../Deals";

const TrendingDeals = () => {
  return (
    <div className="h-[40vh]">
      <div>
        <h3 className="text-[30px] font-[700]">Trending Deals</h3>
      </div>
      <div className="flex items-center space-x-8 justify-center">
        <Deals
          heading="10% Off Sitewide"
          paragraph="Get 10% Off At Proozy"
          btntext="Shop Now"
        />
        <Deals
          heading="10% Off Sitewide"
          paragraph="Get 10% Off At Proozy"
          btntext="Shop Now"
        />
        <Deals
          heading="10% Off Sitewide"
          paragraph="Get 10% Off At Proozy"
          btntext="Shop Now"
        />
        <Deals
          heading="10% Off Sitewide"
          paragraph="Get 10% Off At Proozy"
          btntext="Shop Now"
        />
      </div>
    </div>
  );
};

export default TrendingDeals;
