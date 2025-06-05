import { Stack, TextField, useTheme } from "@mui/material";
import TextFieldLabel from "./TextFieldLabel";

export default function InputTextField({
  label,
  requiredMark,
  placeholder,
  name,
  children,
}) {
  const theme = useTheme();

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
        autoComplete="off"
      >
        {children}
      </TextField>
    </Stack>
  );
}
