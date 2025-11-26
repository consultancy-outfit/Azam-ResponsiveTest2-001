"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import {  CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";
import { ResponseSectionImageMain } from "@/assets";

const ImageMap = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("image-map-container");
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleAreaClick = (area: any) => {
    if (area.link && area.link !== "#") {
      router.push(area.link);
    }
  };

  const calculateStyle = (area: any) => {
    if (containerWidth === 0) return {};

    return {
      position: "absolute",
      left: `${(area.x / 1810) * 100}%`,
      top: `${(area.y / 6393) * 100}%`,
      width: `${(area.width / 1810) * 100}%`,
      height: `${(area.height / 6393) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/crypto-com-exchange-api-v1");
  }, [router]);


  // Areas data from your SVG
  const areas = [
    {
      id: 1,
      x: 10.313,
      y: 10.313,
      width: 472.697,
      height: 211.425,
      title: "section1",
      link: "/account-balance-position-api-sub-sec",
      status: "active",
    },
    {
      id: 2,
      x: -1.719,
      y: 1509.193,
      width: 520.826,
      height: 163.295,
      title: "",
      link: "/account-balance-position-api-sub-sec-1",
      status: "coming soon",
    },
    {
      id: 3,
      x: 10.313,
      y: 2167.531,
      width: 486.448,
      height: 202.83,
      title: "",
      link: "/account-balance-position-api-sub-sec-2",
      status: "coming soon",
    },
    {
      id: 4,
      x: -1.719,
      y: 3381.073,
      width: 611.928,
      height: 134.074,
      title: "",
      link: "/account-balance-position-api-sub-sec-3",
      status: "coming soon",
    },
    {
      id: 5,
      x: 8.594,
      y: 4010.19,
      width: 558.642,
      height: 180.484,
      title: "",
      link: "/account-balance-position-api-sub-sec-4",
      status: "coming soon",
    },
    {
      id: 6,
      x: 5.157,
      y: 5481.567,
      width: 484.729,
      height: 230.332,
      title: "",
      link: "/account-balance-position-api-sub-sec-5",
      status: "coming soon",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ py: 4, px: 3 }}>
      {/* Header */}
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexWrap="wrap"
        gap={2}
        mb={3}
      >
        {/* Back Icon + Title */}
        <Stack flexDirection="row" alignItems="center" mt={5}>
          <Image
            src={CommonBackIcon}
            alt="back"
            width={isMobile ? 24 : 40}
            height={isMobile ? 24 : 40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
           Account Balance and Position API
          </Typography>
        </Stack>
      </Stack>

      {/* Checkbox Form */}
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>

      {/* Image with clickable areas */}
      <Box
        id="image-map-container"
        sx={{ position: "relative", width: "100%" }}
      >
        <Image
          src={ResponseSectionImageMain}
          alt="Comprehensive System Map"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={{
              ...calculateStyle(area),
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "2px solid white",
                opacity: 0.2,
              },
              boxSizing: "border-box",
              transition: "all 0.2s ease-in-out",
              border: "2px solid transparent",
              borderRadius: "2px",
            }}
            onClick={() => handleAreaClick(area)}
            title={area.title || `Section ${area.id}`}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageMap;
