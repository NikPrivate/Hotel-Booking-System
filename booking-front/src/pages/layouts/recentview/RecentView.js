import React from "react";
import Lobby from "../../../assets/home/recent-view/lobby.svg";
import SubmitButton from "../../../components/SubmitButton";
import { useNavigate } from "react-router-dom";

export default function RecentView() {
  const navigate = useNavigate();

  const navToHome = () => {
    navigate("/home");
  };

  const title = "Recently viewed";
  const message =
    "Explore stays and we'll save them here so you can easily continue your search later.";

  return (
    <div>
      <div className="font-bold text-[30px]">{title}</div>
      <div className="!mt-7">{message}</div>
      <img src={Lobby} className="!mt-7" />
      <div className="flex justify-end">
        <SubmitButton
          name="Search stays"
          className="border py-3 px-9 rounded-xl font-bold cursor-pointer"
          onClick={navToHome}
        />
      </div>
    </div>
  );
}
