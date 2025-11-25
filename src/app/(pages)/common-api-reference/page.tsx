"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CommonAPIReferenceImage } from "@/assets";
import { useMediaQuery } from "@mui/system";
import { MultiBackIcon } from "@/assets/common-assets";

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
      left: `${(area.x / 1808) * 100}%`,
      top: `${(area.y / 2601) * 100}%`,
      width: `${(area.width / 1808) * 100}%`,
      height: `${(area.height / 2601) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/crypto-com-exchange-api-v1");
  }, [router]);

  // Single area data matching your original SVG
  const areas = [
    {
      id: 1,
      x: 3.434,
      y: 1763.358,
      width: 377.74,
      height: 137.36,
      title: "section1",
      link: "/reponses-reason-codes",
      status: "active", // You can adjust this based on your needs
    },
  ];

  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ py: 4, px: 3 }}>
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
            src={MultiBackIcon}
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
            Common API Reference
          </Typography>
        </Stack>
      </Stack>

      <Box
        id="image-map-container"
        sx={{ position: "relative", width: "100%" }}
      >
        <Image
          src={CommonAPIReferenceImage}
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
            title={area.title}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImageMap;
