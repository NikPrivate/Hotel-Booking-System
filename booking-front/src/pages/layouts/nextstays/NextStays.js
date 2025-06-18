import React from "react";
import Heart from "../../../assets/home/navbar/heart.svg";
import HamburgerMenu from "../../../assets/home/your-next-stay/hamburger-menu.svg";
import Copy from "../../../assets/home/your-next-stay/copy.svg";
import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function NextStays() {
  const theme = useTheme();
  const navigate = useNavigate();
  const title = "Save, sort and compare your favourite stays";

  const navToHome = () => {
    navigate("/home");
  };

  const lists = [
    {
      icon: Heart,
      content: [
        { text: "Narrow down", bold: true },
        {
          text: " your search by saving your favourite stays here",
          bold: false,
        },
      ],
    },
    {
      icon: HamburgerMenu,
      content: [
        { text: "Log in to save your favourites for later and ", bold: false },
        { text: "create your own lists", bold: true },
      ],
    },
    {
      icon: Copy,
      content: [
        {
          text: "Compare",
          bold: true,
        },
        {
          text: " your favourites to choose the perfect stay",
          bold: false,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="text-[22px] font-bold">{title}</div>
      <div className="!mt-7 space-y-4">
        {lists.map((list, index) => (
          <Box className="flex items-center">
            <div
              index={index}
              className="border rounded-full p-2 mr-6"
              style={{ backgroundColor: theme.palette.button.secondary }}
            >
              <img src={list.icon} className="w-4 h-4" />
            </div>
            <div>
              {list.content.map((segment, idx) => (
                <span key={idx} className={segment.bold ? "font-bold" : ""}>
                  {segment.text}
                </span>
              ))}
            </div>
          </Box>
        ))}
      </div>
      <SubmitButton
        onClick={navToHome}
        name="Search stays"
        className="w-fit mt-5 px-3 py-3 rounded-lg font-bold text-[14px] cursor-pointer"
      />
    </div>
  );
}
