import React from "react";

function Deals({ paragraph, heading, btntext }) {
  return (
    <div>
      <div class="relative h-[283px] w-[275px] rounded-md">
        <img
          className="h-[102px]"
          src="https://s3-alpha-sig.figma.com/img/002f/1e7b/4591f0959b279ef1f1f6e58b8fc42144?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q~LVODRfRfX~eKfUqXi17iz~CD7TAcp06nHhCki8xRnbYLt~qPtKe2sPRmb~U-1RpDhIjQfniu8rk5ymcZyg~YbBj78jpsBcV1AEdaV74BUeSY8P6tj50WiLneZR5a5pTPnTHK4sXfGhev06Zcb-QkZyGfJgH-R5-YgkGtbCZZDt1isty1FrdOPiaI1hUTXsr2-HiDdgI-I3BlDCsaAwKcX~x8Ru70nyNOxC-emd8y-Nzo2V5MoRGN-zWuQXnpUFsH-oQYxcz9duqZsineWe6BmtC~tFTYRyd2zKL22N9dDdscu0fDrI2cZ-SS3VrnWrCBqEadll~zYgAj34n6m3cg__"
          alt=""
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h3 class="text-lg font-semibold text-white">{heading}</h3>
          <p class="mt-2 text-sm text-gray-300">{paragraph}</p>
          <button class="mt-2 lg:w-[227px] text-center rounded-[10px] cursor-pointer items-center text-sm font-semibold bg-[#FFCE31] text-black">
            {btntext}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deals;
