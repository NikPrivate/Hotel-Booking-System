import { Box, useTheme } from "@mui/material";
import React from "react";

export default function AuthButton({ name }) {
  const theme = useTheme();
  return (
    <Box
      className="border w-full py-[6px] rounded-md mt-7 cursor-pointer text-center"
      sx={{
        backgroundColor: theme.palette.button.primary,
        color: theme.palette.white.main,
        "&:hover": {
          backgroundColor: theme.palette.button.primaryHover,
        },
      }}
    >
      {name}
    </Box>
  );
}
