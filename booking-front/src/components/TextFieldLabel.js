import { Stack, Typography } from "@mui/material";

export default function TextFieldLabel({
  label,
  required = false,
  color = null,
}) {
  return (
    <Stack direction="row">
      <Typography>{label}</Typography>
      {required && (
        <Typography className="!pl-[5px] text-red-600">*</Typography>
      )}
    </Stack>
  );
}
