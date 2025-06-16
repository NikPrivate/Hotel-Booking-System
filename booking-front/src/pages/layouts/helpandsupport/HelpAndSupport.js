import React from "react";
import Bell from "../../../assets/home/helpandsupport/bell.svg";
import { useNavigate } from "react-router-dom";

export default function HelpAndSupport() {
  const navigate = useNavigate();
  const title = "Help and support";

  const navToRegister = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="font-bold text-[30px]">{title}</div>
      <div className="flex items-center mt-5">
        <div className="mr-5">
          <img src={Bell} className="w-12 h-12" />
        </div>
        <div className="!mt-6">
          To be able to quickly ask us a question you have to{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            log in
          </span>{" "}
          or{" "}
          <span
            onClick={navToRegister}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            create an account
          </span>{" "}
          if you don't have one yet. No matter what, you can still try sending
          us your inquiry on our{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            help center
          </span>
        </div>
      </div>
    </div>
  );
}
