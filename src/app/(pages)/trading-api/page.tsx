"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { TradingAPIImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

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
      left: `${(area.x / 1920) * 100}%`,
      top: `${(area.y / 11052) * 100}%`,
      width: `${(area.width / 1920) * 100}%`,
      height: `${(area.height / 11052) * 100}%`,
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
      x: 34.644,
      y: 45.983,
      width: 430.313,
      height: 138.575,
      title: "",
      link: "/trading-api-sub-sec-1",
      status: "coming soon",
    },
    {
      id: 2,
      x: 47.407,
      y: 1242.108,
      width: 510.541,
      height: 144.046,
      title: "",
      link: "/trading-api-sub-sec-2",
      status: "coming soon",
    },
    {
      id: 3,
      x: 60.171,
      y: 2119.145,
      width: 381.083,
      height: 144.046,
      title: "",
      link: "/trading-api-sub-sec-3",
      status: "coming soon",
    },
    {
      id: 9,
      x: 56.524,
      y: 2908.49,
      width: 459.487,
      height: 149.516,
      title: "",
      link: "/trading-api-sub-sec-4",
      status: "coming soon",
    },
    {
      id: 10,
      x: 56.524,
      y: 3801.88,
      width: 441.254,
      height: 164.103,
      title: "",
      link: "/trading-api-sub-sec-5",
      status: "coming soon",
    },
    {
      id: 11,
      x: 52.877,
      y: 4686.154,
      width: 461.311,
      height: 145.869,
      title: "",
      link: "/trading-api-sub-sec-6",
      status: "coming soon",
    },
    {
      id: 4,
      x: 25.527,
      y: 6006.553,
      width: 519.658,
      height: 185.983,
      title: "",
      link: "/trading-api-sub-sec-7",
      status: "coming soon",
    },
    {
      id: 5,
      x: 40.114,
      y: 7472.365,
      width: 590.769,
      height: 138.575,
      title: "",
      link: "/trading-api-sub-sec-8",
      status: "coming soon",
    },
    {
      id: 6,
      x: 47.407,
      y: 8054.188,
      width: 618.12,
      height: 213.333,
      title: "",
      link: "/trading-api-sub-sec-9",
      status: "coming soon",
    },
    {
      id: 7,
      x: 45.584,
      y: 8796.125,
      width: 506.895,
      height: 160.456,
      title: "",
      link: "/trading-api-sub-sec-10",
      status: "coming soon",
    },
    {
      id: 8,
      x: 56.524,
      y: 9521.766,
      width: 386.553,
      height: 169.573,
      title: "",
      link: "/trading-api-sub-sec-11",
      status: "coming soon",
    },
    {
      id: 12,
      x: 34.644,
      y: 10256.467,
      width: 601.709,
      height: 147.692,
      title: "",
      link: "/trading-api-sub-sec-12",
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
            Trading API
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
          src={TradingAPIImage}
          alt="Comprehensive System Map"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={{
              ...calculateStyle(area),
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
