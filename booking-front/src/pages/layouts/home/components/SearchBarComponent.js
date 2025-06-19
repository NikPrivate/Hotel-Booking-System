import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useTheme } from "@emotion/react";

export default function SearchBarComponent() {
  const theme = useTheme();
  return (
    <div
      className="flex items-center border rounded-lg !mt-10 shadow-md"
      style={{ backgroundColor: theme.palette.white.main }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <input />
        </div>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker label="Check in" />
        </DemoContainer>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Check out"
            slotProps={{
              textField: {
                variant: "standard",
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
