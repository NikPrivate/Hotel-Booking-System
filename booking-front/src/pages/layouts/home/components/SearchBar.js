import React from "react";
import { useTheme } from "@mui/material/styles";
import Booking from "../../../../assets/home/booking-com.png";
import Agoda from "../../../../assets/home/agoda.png";
import Hotels from "../../../../assets/home/hotels-com.png";
import Expedia from "../../../../assets/home/expedia.png";
import Vrbo from "../../../../assets/home/vrbo.png";
import All from "../../../../assets/home/ALL.png";
import Trip from "../../../../assets/home/Trip-com.png";
import SearchBarComponent from "./SearchBarComponent";

export default function SearchBar({
  heading,
  comments,
  className = "",
  style = "",
}) {
  const theme = useTheme();

  const companyLists = [
    {
      icon: Booking,
    },
    {
      icon: Agoda,
    },
    {
      icon: Hotels,
    },
    {
      icon: Expedia,
    },
    {
      icon: Vrbo,
    },
    {
      icon: All,
    },
    {
      icon: Trip,
    },
  ];
  return (
    <div style={style}>
      <div className={className}>
        <div className="font-bold !text-[24px] mb-1">{heading}</div>
        <div>{comments}</div>
      </div>
      <div className="px-[250px]">
        <SearchBarComponent />
      </div>
      <div className="px-[250px] !mt-10 flex justify-between items-center !pb-6">
        {companyLists.map((list, index) => (
          <img src={list.icon} className="h-4" />
        ))}
        <div className="text-[12px] text-gray-600">+100 more</div>
      </div>
    </div>
  );
}
