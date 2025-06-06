import { useTheme } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function FormFooter({ className = "" }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className={className}>
      <div>Doesn't have an account ?</div>
      <div onClick={handleNavigate} className="cursor-pointer text-blue-500">
        Register
      </div>
    </div>
  );
}
