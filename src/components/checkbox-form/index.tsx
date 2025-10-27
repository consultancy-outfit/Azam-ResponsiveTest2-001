"use client";

import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { CheckBox, CheckBoxOutlineBlank } from "@mui/icons-material";
import { useParams } from "next/navigation";

interface CheckboxFormProps {
  onChange?: (selectedValue: string, page: string) => void;
}
const checkboxData = [
  {
    title: "Complete",
    value: "complete",
  },
  {
    title: "In Progress",
    value: "inprogress",
  },
  {
    title: "Pending",
    value: "pending",
  },
];
export const CheckboxForm: React.FC<CheckboxFormProps> = ({ onChange }) => {
  const params = useParams();
  const page = (params?.page as string) || "default";
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    if (onChange) {
      onChange(value, page);
    }
  };

  const getColor = (value: string) => {
    switch (value) {
      case "pending":
        return "red";
      case "inprogress":
        return "orange";
      case "complete":
        return "green";
      default:
        return "gray";
    }
  };

  return (
    <Box display={{ sm: "flex", xs: "unset" }} alignItems="center" gap={1}>
      <Typography
        variant="h5"
        color="#5A5867"
        fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
        fontWeight={{ md: 600, xs: 500 }}
        ml={{ md: 2, xs: 1 }}
        sx={{
          fontFamily: "inherit",
        }}
      >
        Working Status
      </Typography>
      <FormControl>
        <RadioGroup
          row
          name="radioGroup"
          value={selectedValue ?? "pending"}
          onChange={handleChange}
        >
          {checkboxData.map((opt) => (
            <FormControlLabel
              key={opt.value}
              value={opt.value}
              sx={{
                ml: 2,
                mr: 0,
                color: getColor(opt.value),
                "& .MuiTypography-root": {
                  fontFamily: "inherit",
                },
              }}
              control={
                <Radio
                  name="status"
                  icon={
                    <CheckBoxOutlineBlank
                      sx={{
                        color: getColor(opt.value),
                      }}
                    />
                  }
                  checkedIcon={
                    <CheckBox
                      sx={{
                        color: getColor(opt.value),
                      }}
                    />
                  }
                />
              }
              label={opt.title}
              labelPlacement="start"
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
