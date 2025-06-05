import { Stack, TextField, useTheme } from "@mui/material";
import TextFieldLabel from "./TextFieldLabel";
import { getIn, useFormikContext } from "formik";

export default function InputTextField({
  label,
  requiredMark,
  placeholder,
  name,
  type = "text",
  children,
}) {
  const theme = useTheme();

  const { values, touched, errors, setFieldValue, handleBlur, dirty } =
    useFormikContext();

  const error = getIn(touched, name) && getIn(errors, name);

  return (
    <Stack className="space-y-1">
      <TextFieldLabel
        label={label}
        sx={{ color: theme.palette.background.default }}
        required={requiredMark}
      />
      <TextField
        size="small"
        placeholder={placeholder}
        id={name}
        name={name}
        type={type}
        autoComplete="off"
        value={getIn(values, name)}
        onChange={(e) => setFieldValue(name, e.target.value)}
        onBlur={handleBlur}
        error={!!error}
        helperText={error || ""}
      >
        {children}
      </TextField>
    </Stack>
  );
}
