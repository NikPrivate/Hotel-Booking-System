import InputTextField from "../../../components/InputTextField";
import { useTheme } from "@mui/material/styles";
import LogoImage from "../../../assets/login/logo-image.png";
import FormHeader from "./components/FormHeader";
import FormFooter from "./components/FormFooter";
import FormikForm from "../../../components/FormikForm";
import * as Yup from "yup";
import { Box } from "@mui/material";
import AuthButton from "../../../components/AuthButton";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const theme = useTheme();
  const navigate = useNavigate();

  const initialValues = { name: "", email: "", password: "" };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be  15 characeters or less")
      .required("Name is a required field"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Email format is invalid."
      )
      .required("Email is a required field."),

    password: Yup.string().required("Password is a required field"),
  });

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Form values: ", values);
    setSubmitting(false);
  };

  return (
    <div className="grid xl:grid-cols-2">
      <div className="col-span-1">
        <img src={LogoImage} alt="Logo" className="h-screen" />
      </div>
      <div className="col-span-1 pt-10 xl:px-[180px] px-10 h-screen">
        <FormHeader title="InnSeeker" message="Create your account" />
        <FormikForm
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          className="!space-y-3"
        >
          <InputTextField
            name="name"
            label="Name"
            placeholder="Your Name"
            requiredMark
          />
          <InputTextField
            name="email"
            label="Email"
            placeholder="yourname@mail.com"
            requiredMark
          />
          <InputTextField
            name="password"
            label="Password"
            placeholder="min. 8 character"
            requiredMark
          />
          <AuthButton onClick={handleNavigateLogin} name="Sign Up" />
        </FormikForm>
        <FormFooter />
      </div>
    </div>
  );
}
