import * as React from "react";
import { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, useTheme } from "@mui/material";

export default function SearchBarComponent() {
  const theme = useTheme();
  const [isHover1, setIsHover1] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);
  const [isHover4, setIsHover4] = useState(false);

  return (
    <div
      className="flex items-center border rounded-[10px] !mt-10 shadow-md gap-2 py-[4px] px-[4px]"
      style={{ backgroundColor: theme.palette.white.main }}
    >
      <Box
        className="rounded-[10px] !py-1 px-8"
        onMouseEnter={() => setIsHover1(true)}
        onMouseLeave={() => setIsHover1(false)}
        sx={{
          backgroundColor: isHover1
            ? theme.palette.white.mainHover
            : theme.palette.white.main,
        }}
      >
        <div className="text-[12px]  text-gray-500">Hotel</div>
        <input
          className="rounded outline-none"
          style={{
            backgroundColor: isHover1 ? "#f0f0f0" : "transparent",
          }}
          placeholder="Where to?"
        />
      </Box>
      <Box
        className="rounded-[10px] !py-1 px-2"
        onMouseEnter={() => setIsHover2(true)}
        onMouseLeave={() => setIsHover2(false)}
        sx={{
          backgroundColor: isHover2
            ? theme.palette.white.mainHover
            : theme.palette.white.main,
        }}
      >
        <div className="text-[12px]  text-gray-500">Check in</div>
        <input
          className="rounded outline-none w-32"
          style={{
            backgroundColor: isHover2 ? "#f0f0f0" : "transparent",
          }}
          placeholder="Where to?"
        />
      </Box>
      <Box
        className="rounded-[10px] !py-1 px-2"
        onMouseEnter={() => setIsHover3(true)}
        onMouseLeave={() => setIsHover3(false)}
        sx={{
          backgroundColor: isHover3
            ? theme.palette.white.mainHover
            : theme.palette.white.main,
        }}
      >
        <div className="text-[12px]  text-gray-500">Check out</div>
        <input
          className="rounded outline-none w-32"
          style={{
            backgroundColor: isHover3 ? "#f0f0f0" : "transparent",
          }}
          placeholder="Where to?"
        />
      </Box>
      <Box
        className="rounded-[10px] !py-1 px-8"
        onMouseEnter={() => setIsHover4(true)}
        onMouseLeave={() => setIsHover4(false)}
        sx={{
          backgroundColor: isHover4
            ? theme.palette.white.mainHover
            : theme.palette.white.main,
        }}
      >
        <div className="text-[12px] text-gray-500">Guests and rooms</div>
        <input
          className="rounded outline-none"
          style={{
            backgroundColor: isHover4 ? "#f0f0f0" : "transparent",
          }}
          placeholder="Where to?"
        />
      </Box>
      <Box
        className="border rounded-[10px] !py-3 px-8 cursor-pointer font-bold"
        sx={{
          backgroundColor: theme.palette.button.primary,
          "&:hover": {
            backgroundColor: theme.palette.button.primaryHover,
          },
          color: theme.palette.white.main,
        }}
      >
        Search
      </Box>
    </div>
  );
}
