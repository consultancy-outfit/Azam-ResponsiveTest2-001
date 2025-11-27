"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";
import { websocketSubscriptions } from "@/assets";

const ImageMapLarge = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);

  // Original SVG resolution
  const ORIGINAL_WIDTH = 1848;
  const ORIGINAL_HEIGHT = 13347;

  // Resize listener
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("image-map-container-2");
      if (container) setContainerWidth(container.offsetWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleClick = (area: any) => {
    if (area.link && area.link !== "#") router.push(area.link);
  };

  const calculateStyle = (area: any) => {
    if (!containerWidth) return {};

    return {
      position: "absolute",
      left: `${(area.x / ORIGINAL_WIDTH) * 100}%`,
      top: `${(area.y / ORIGINAL_HEIGHT) * 100}%`,
      width: `${(area.width / ORIGINAL_WIDTH) * 100}%`,
      height: `${(area.height / ORIGINAL_HEIGHT) * 100}%`,
      cursor: "pointer",
      transition: "0.25s ease",
    };
  };

  // ----------------------------------------
  // ALL AREAS FROM YOUR SVG (converted)
  // ----------------------------------------
  const areas = [
    {
      id: 1,
      x: 22.81,
      y: 35.09,
      width: 328.18,
      height: 85.99,
      link: "/websocket-subscriptions-introduction",
    },
    {
      id: 2,
      x: 19.3,
      y: 882.75,
      width: 442.25,
      height: 85.99,
      link: "/websocket-heartbeats",
    },
    {
      id: 3,
      x: 24.56,
      y: 1426.8,
      width: 545.8,
      height: 105.29,
      link: "/user-order-instrument-name",
    },
    {
      id: 4,
      x: 24.56,
      y: 1993.66,
      width: 679.17,
      height: 107.05,
      link: "/user-advanced-order-instrument-name",
    },
    {
      id: 5,
      x: 29.83,
      y: 2551.74,
      width: 537.02,
      height: 101.78,
      link: "/user-trade-instrument-name",
    },
    {
      id: 6,
      x: 24.56,
      y: 3113.34,
      width: 384.34,
      height: 100.03,
      link: "/user-balance",
    },
    {
      id: 7,
      x: 24.56,
      y: 3671.43,
      width: 361.52,
      height: 96.52,
      link: "/user-positions",
    },
    {
      id: 8,
      x: 35.09,
      y: 4231.27,
      width: 352.75,
      height: 114.07,
      link: "/user-account-risk",
    },
    {
      id: 9,
      x: 8.77,
      y: 4791.11,
      width: 398.38,
      height: 100.03,
      link: "/user-position-balance",
    },
    {
      id: 10,
      x: 24.56,
      y: 5352.7,
      width: 551.06,
      height: 101.78,
      link: "/book-instrument-name-depth",
    },
    {
      id: 11,
      x: 26.32,
      y: 7191.93,
      width: 458.05,
      height: 96.52,
      link: "/ticker-instrument-name",
    },
    {
      id: 12,
      x: 22.81,
      y: 7732.46,
      width: 486.13,
      height: 121.09,
      link: "/trade-instrument-name",
    },
    {
      id: 13,
      x: 24.56,
      y: 8295.81,
      width: 731.82,
      height: 115.82,
      link: "/candlestick-time-frame-instrument-name",
    },
    {
      id: 14,
      x: 19.3,
      y: 8876.71,
      width: 473.84,
      height: 98.27,
      link: "/index-instrument-name",
    },
    {
      id: 15,
      x: 26.32,
      y: 9431.29,
      width: 435.23,
      height: 110.56,
      link: "/mark-instrument-name",
    },
    {
      id: 16,
      x: 10.52,
      y: 9991.13,
      width: 566.86,
      height: 105.29,
      link: "/settlement-instrument-name",
    },
    {
      id: 17,
      x: 24.56,
      y: 10545.7,
      width: 493.15,
      height: 103.54,
      link: "/funding-instrument-name",
    },
    {
      id: 18,
      x: 24.56,
      y: 11110.81,
      width: 630.03,
      height: 119.33,
      link: "/estimatedfunding-instrument-name",
    },
    {
      id: 19,
      x: 19.3,
      y: 11668.9,
      width: 343.97,
      height: 112.31,
      link: "/public-auth",
    },
    {
      id: 20,
      x: 31.58,
      y: 12219.96,
      width: 572.12,
      height: 121.09,
      link: "/private-set-cancel-on-disconnect",
    },
    {
      id: 21,
      x: 17.54,
      y: 12786.82,
      width: 573.88,
      height: 110.56,
      link: "/private-get-cancel-on-disconnect ",
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
        <Stack direction={"row"} alignItems={"center"} mt={5}>
          <Image
            src={CommonBackIcon}
            alt="back"
            width={isMobile ? 24 : 40}
            height={isMobile ? 24 : 40}
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />

          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
            Websocket Subscriptions
          </Typography>
        </Stack>
      </Stack>

      {/* Checkbox Section */}
      <Box mt={3} mb={4}>
        <CheckboxForm />
      </Box>

      {/* ----------- Image Map Container ---------- */}
      <Box id="image-map-container-2" sx={{ position: "relative", mx: 2 }}>
        <Image
          src={websocketSubscriptions}
          alt="API Map"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            title={`Go to ${area.link}`}
            onClick={() => handleClick(area)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageMapLarge;
