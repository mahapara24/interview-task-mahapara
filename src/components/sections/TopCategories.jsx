import React from "react";
import Category from "../Category";
import { FiWatch } from "react-icons/fi";

const TopCategories = () => {
  return (
    <div className="flex h-[20vh] flex-col">
      {" "}
      <div className="flex justify-between p-4">
        {" "}
        <h1 className="text-[30px] font-[700]">Top Categories</h1>
        <p className="text-[16px] font-[300]">See All Categories</p>
      </div>
      <div className="flex top-0 space-x-14 items-center justify-center">
        <Category
          text="Accessories"
          buttonClassName="bg-[#0091EB] px-3 py-2"
          paragraphClassName="text-white"
        />
        <Category
          text="Beauty"
          buttonClassName="bg-[#F67280] px-3 py-2"
          paragraphClassName="text-white"
        />

        <Category
          text="Clothing"
          buttonClassName="bg-[#FFBF00] px-3 py-2"
          paragraphClassName="text-white"
        />
        <Category
          text="Accessories"
          buttonClassName="bg-[#51587B] px-3 py-2"
          paragraphClassName="text-white"
        />
        <Category
          text="Accessories"
          buttonClassName="bg-[#FF6200] px-3 py-2"
          paragraphClassName="text-white"
        />
      </div>
    </div>
  );
};

export default TopCategories;
