import { Box, useTheme } from "@mui/material";
import { FcGoogle } from "react-icons/fc";

export default function GoogleSignUp({ title }) {
  const theme = useTheme();
  return (
    <Box
      className="py-[5px] text-sm flex items-center justify-center gap-2 border rounded-md w-full cursor-pointer"
      sx={{
        backgroundColor: theme.palette.white.main,
        "&:hover": {
          backgroundColor: theme.palette.white.mainHover,
        },
      }}
    >
      <span className="tex t-xl">
        <FcGoogle />
      </span>
      {title}
    </Box>
  );
}
