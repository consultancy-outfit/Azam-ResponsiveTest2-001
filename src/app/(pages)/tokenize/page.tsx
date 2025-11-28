"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import {
  CommonBackIcon,
} from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";
import { TokenizeImageMain } from "@/assets";

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
      top: `${(area.y / 1298) * 100}%`,
      width: `${(area.width / 1920) * 100}%`,
      height: `${(area.height / 1298) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/clear-junction-reference");
  }, [router]);

  // Areas data from your SVG
  const areas = [
    {
      id: 1,
      x: 51.054,
      y: 198.746,
      width: 412.08,
      height: 134.929,
      title: "",
      link: "/tokenize-request-attributes",
      status: "coming soon",
    },
    {
      id: 2,
      x: 32.821,
      y: 581.652,
      width: 468.604,
      height: 123.989,
      title: "",
      link: "/tokenize-request-attributes-1",
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
            Clear Junction API / Tokenize
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
          src={TokenizeImageMain}
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
