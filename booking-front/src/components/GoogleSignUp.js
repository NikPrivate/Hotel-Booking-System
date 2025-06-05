import { Box, useTheme } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function GoogleSignUp({ title }) {
  const theme = useTheme();

  const login = useGoogleLogin({
    onSucccess: async (tokenResponse) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );
        console.log("Google user info: ", res.data);
      } catch (err) {
        console.error("Google login error: ", err);
      }
    },
    onError: (error) => console.error("Login Failed:", error),
  });

  return (
    <Box
      className="py-[5px] text-sm flex items-center justify-center gap-2 border rounded-md w-full cursor-pointer"
      sx={{
        backgroundColor: theme.palette.white.main,
        "&:hover": {
          backgroundColor: theme.palette.white.mainHover,
        },
      }}
      onClick={() => login()}
    >
      <span className="tex t-xl">
        <FcGoogle />
      </span>
      {title}
    </Box>
  );
}
