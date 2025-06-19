import { useTheme } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRight } from "../../../../assets/home/arrow-right.svg";

export default function HotelDeals({ title, className = "", view }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const navToDeals = () => {
    navigate("/home/deals");
  };
  return (
    <div className={className}>
      <div className="flex items-center justify-between">
        <div className="text-[24px] font-bold">{title}</div>
        <div className="flex items-center cursor-pointer" onClick={navToDeals}>
          <div
            className="text-[14px] font-bold"
            style={{ color: theme.palette.button.primary }}
          >
            {view}
          </div>
          <ArrowRight
            className="w-4 h-4"
            style={{ color: theme.palette.button.primary }}
          />
        </div>
      </div>
    </div>
  );
}
