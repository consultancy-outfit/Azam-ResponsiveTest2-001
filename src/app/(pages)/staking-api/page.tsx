"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/system";

// 👉 Your image
import { stakingImg } from "@/assets";

// 👉 Checkbox form component
import { CheckboxForm } from "@/components/checkbox-form";

// 👉 Back icon + legend
import { CommonBackIcon, colorLegends } from "@/assets/common-assets";

const SectionImageMapV3 = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const ORIGINAL_WIDTH = 1848;
  const ORIGINAL_HEIGHT = 9754;

  // ----------------------------------------------------
  // Resize container on window resize
  // ----------------------------------------------------
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("image-map-container-v3");
      if (container) setContainerWidth(container.offsetWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // ----------------------------------------------------
  // Click handler
  // ----------------------------------------------------
  const handleAreaClick = (area) => {
    if (area.link && area.link !== "#") {
      router.push(area.link);
    }
  };

  // ----------------------------------------------------
  // Convert SVG → responsive box style
  // ----------------------------------------------------
  const calculateStyle = (area) => {
    if (containerWidth === 0) return {};

    return {
      position: "absolute",
      left: `${(area.x / ORIGINAL_WIDTH) * 100}%`,
      top: `${(area.y / ORIGINAL_HEIGHT) * 100}%`,
      width: `${(area.width / ORIGINAL_WIDTH) * 100}%`,
      height: `${(area.height / ORIGINAL_HEIGHT) * 100}%`,
      cursor: "pointer",
      transition: "0.25s ease",
      // "&:hover": {
      //   border: "2px solid #fff",
      //   backgroundColor: "rgba(255,255,255,0.18)",
      // },
    };
  };

  // ----------------------------------------------------
  // Clickable Areas from SVG
  // ----------------------------------------------------
  const areas = [
    {
      id: 1,
      x: 28.08,
      y: 31.58,
      width: 442.25,
      height: 98.27,
      link: "/private-staking-stake",
      title: "private/staking/state",
    },
    {
      id: 2,
      x: 29.83,
      y: 879.24,
      width: 442.25,
      height: 98.27,
      link: "/private-staking-unstake",
      title: "private/staking/unstake",
    },
    {
      id: 3,
      x: 17.54,
      y: 1719.88,
      width: 642.32,
      height: 105.29,
      link: "/private-staking-get-staking-position",
      title: "private/staking/get-staking-position",
    },
    {
      id: 4,
      x: 24.56,
      y: 2569.29,
      width: 679.17,
      height: 121.09,
      link: "/private-staking-get-staking-instruments",
      title: "private/staking/get-staking-instruments",
    },
    {
      id: 5,
      x: 28.08,
      y: 3838.15,
      width: 596.69,
      height: 124.6,
      link: "/private-staking-get-open-stake",
      title: "private/staking/get-open-stake",
    },
    {
      id: 6,
      x: 19.3,
      y: 4689.32,
      width: 630.03,
      height: 114.07,
      link: "/private-staking-get-stake-history",
      title: "private/staking/get-stake-history",
    },
    {
      id: 7,
      x: 28.08,
      y: 5521.18,
      width: 617.75,
      height: 126.35,
      link: "/private-staking-get-reward-history",
      title: "private/staking/get-reward-history",
    },
    {
      id: 8,
      x: 26.32,
      y: 6370.59,
      width: 496.66,
      height: 121.09,
      link: "/private-staking-convert",
      title: "private/staking/convert",
    },
    {
      id: 9,
      x: 24.56,
      y: 7205.97,
      width: 616,
      height: 122.84,
      link: "/private-staking-get-open-convert",
      title: "private/staking/get-open-convert",
    },
    {
      id: 10,
      x: 24.56,
      y: 8190.51,
      width: 600.2,
      height: 115.82,
      link: "/private-staking-get-convert-history",
      title: "private/staking/get-convert-history",
    },
    {
      id: 11,
      x: 19.3,
      y: 9178.57,
      width: 605.47,
      height: 121.09,
      link: "/public-staking-get-conversion-rate",
      title: "public/staking/get-conversion-rate",
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
            Staking API
          </Typography>
        </Stack>
      </Stack>

      {/* ---------------------------------------- Checkbox Form ---------------------------------------- */}
      <Box mt={3} mb={4}>
        <CheckboxForm />
      </Box>

      {/* ---------------------------------------- Image Map ---------------------------------------- */}
      <Box id="image-map-container-v3" sx={{ position: "relative", mx: 2 }}>
        <Image
          src={stakingImg}
          alt="Staking API Map"
          style={{ width: "100%", height: "auto" }}
        />

        {/* Render clickable areas */}
        {areas.map((area) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            onClick={() => handleAreaClick(area)}
            title={area.title}
          />
        ))}
      </Box>

      {/* ---------------------------------------- Legend Popup ---------------------------------------- */}
      {isOpen && (
        <>
          {/* Overlay */}
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />

          {/* Popup box */}
          <Box
            sx={{
              position: "fixed",
              right: { xs: "10%", md: "50px" },
              top: { xs: "20%", md: "150px" },
              width: { xs: "80%", sm: "400px" },
              background: "#fff",
              p: 2,
              borderRadius: 2,
              boxShadow: 5,
              zIndex: 1300,
            }}
          >
            <Image
              src={colorLegends}
              alt="Legend"
              width={400}
              height={350}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default SectionImageMapV3;
