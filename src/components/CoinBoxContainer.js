import React from "react";
import CoinSlider from "./CoinSlider";
import ad from "../photo/ad.gif";

export default function CoinBoxContainer() {
  return (
    <div>
      <div className="grid grid-cols-12 shadow-xl py-4">
        <div className="col-span-2">
          <img src={ad} alt="ad" />
        </div>
        <div className="col-span-4 space-y-4">
          <p className="font-bold">Popüler kripto paralar</p>
          <div className="space-y-4">
            <p>Tum işlem hacmi: $997.253 biliion</p>
            <p>24 saatlik işlem hacmi: $57.182 biliion</p>
            <p>BTC Piyasa Değeri : $57.182 biliion</p>
            <p>BTC Piyasa Değeri : $57.182 biliion</p>
          </div>
          <div className="space-x-3">
            <button className="w-[90px] h-8 bg-[#30505c] bg-opacity-60 rounded-r-full rounded-l-full ">
              Tum Liste
            </button>
            <button className="w-[90px] h-8 bg-[#f6c120] bg-opacity-60 rounded-r-full rounded-l-full ">
              Convertor
            </button>
          </div>
        </div>
        <div className="col-span-6">
          <CoinSlider />
        </div>
      </div>
    </div>
  );
}
