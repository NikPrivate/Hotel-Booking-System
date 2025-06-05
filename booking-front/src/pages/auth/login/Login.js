import InputTextField from "../../../components/InputTextField";
import { useTheme } from "@mui/material/styles";
import LogoImage from "../../../assets/login/logo-image.png";
import FormHeader from "./components/FormHeader";
import FormFooter from "./components/FormFooter";
import FormikForm from "../../../components/FormikForm";
import * as Yup from "yup";

export default function Login() {
  const theme = useTheme();

  const initialValues = { Name: "", Email: "", Password: "" };

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

  return (
    <div className="grid xl:grid-cols-2">
      <div className="col-span-1">
        <img src={LogoImage} alt="Logo" className="h-screen" />
      </div>
      <div className="col-span-1 pt-10 xl:px-[180px] px-10">
        <FormHeader title="InnSeeker" message="Create your account" />
        <div className="space-y-5 mt-5">
          <FormikForm
            initialValues={initialValues}
            validationSchema={validationSchema}
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
          </FormikForm>
        </div>
        <FormFooter />
      </div>
    </div>
  );
}
