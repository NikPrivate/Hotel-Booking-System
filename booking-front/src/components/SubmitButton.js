import { Box, useTheme } from "@mui/material";
import React from "react";

export default function SubmitButton({ className = "", name, onClick }) {
  const theme = useTheme();

  return (
    <Box
      className={className}
      onClick={onClick}
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
