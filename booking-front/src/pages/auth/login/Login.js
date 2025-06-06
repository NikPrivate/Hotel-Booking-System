import { useTheme } from "@emotion/react";
import React from "react";
import * as Yup from "yup";
import LogoImage from "../../../assets/login/logo-image.png";
import FormHeader from "./components/FormHeader";
import FormikForm from "../../../components/FormikForm";
import InputTextField from "../../../components/InputTextField";
import { Box } from "@mui/material";
import AuthButton from "../../../components/AuthButton";
import FormFooter from "./components/FormFooter";

export default function Login() {
  const theme = useTheme();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email format is invalid."
      )
      .required("Email is a required field"),

    password: Yup.string().required("Password is a required field"),
  });
  return (
    <div className="grid xl:grid-cols-2">
      <div className="col-span-1">
        <img src={LogoImage} alt="logo" className="h-screen" />
      </div>
      <div className="col-span-1 pt-10 xl:px-[180px] px-10 h-screen">
        <FormHeader title="InnSeeker" message="Login your account" />
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          className="!space-y-3"
        >
          <InputTextField
            name="email"
            label="Email"
            placeholder="yourname@gmail.com"
            requiredMark
          />
          <InputTextField
            name="password"
            label="Password"
            placeholder="min. 8 character"
            requiredMark
          />
          <AuthButton name="Log In" />
        </FormikForm>
        <FormFooter className="mt-3 flex space-x-2" />
      </div>
    </div>
  );
}
