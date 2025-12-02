"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { virtualAccountImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import {
  CommonBackIcon,
} from "@/assets/common-assets";
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
      left: `${(area.x / 1848) * 100}%`,
      top: `${(area.y / 13532) * 100}%`,
      width: `${(area.width / 1848) * 100}%`,
      height: `${(area.height / 13532) * 100}%`,
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
      x: 19.305,
      y: 175.499,
      width: 387.852,
      height: 121.094,
      title: "",
      // link: "/clear-junction-reference",
      status: "coming soon",
    },
    {
      id: 4,
      x: 29.835,
      y: 696.729,
      width: 257.983,
      height: 121.094,
      title: "",
      link: "/virtual-accounts-sec-1",
      status: "coming soon",
    },
    {
      id: 5,
      x: 50.895,
      y: 1003.852,
      width: 710.769,
      height: 114.074,
      title: "sec3",
      link: "/virtual-accounts-sec-2",
      status: "active",
    },
    {
      id: 6,
      x: 24.57,
      y: 2030.519,
      width: 691.464,
      height: 119.339,
      title: "",
      link: "virtual-accounts-sec-3",
      status: "coming soon",
    },
    {
      id: 7,
      x: 28.08,
      y: 3058.94,
      width: 710.769,
      height: 126.359,
      title: "",
      link: "/virtual-accounts-sec-4",
      status: "coming soon",
    },
    {
      id: 8,
      x: 35.1,
      y: 3817.094,
      width: 619.51,
      height: 115.829,
      title: "",
      link: "/virtual-accounts-sec-5",
      status: "coming soon",
    },
    {
      id: 9,
      x: 7.02,
      y: 4582.268,
      width: 508.946,
      height: 138.644,
      title: "",
      link: "/virtual-accounts-sec-6",
      status: "coming soon",
    },
    {
      id: 10,
      x: 22.815,
      y: 6261.789,
      width: 384.342,
      height: 150.929,
      title: "",
      link: "/virtual-accounts-sec-7",
      status: "coming soon",
    },
    {
      id: 11,
      x: 31.59,
      y: 7783.362,
      width: 473.846,
      height: 157.949,
      title: "",
      link: "/virtual-accounts-sec-8",
      status: "coming soon",
    },
    {
      id: 12,
      x: 15.795,
      y: 11572.376,
      width: 616.0,
      height: 163.214,
      title: "",
      link: "/virtual-accounts-sec-9",
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
            color="#5A5867"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2rem" }}
            fontWeight={600}
            ml={2}
          >
            Clear junction API / Virtual Accounts /
          </Typography>
        </Stack>
      </Stack>

      <Typography
        variant="h3"
        color="#0246BC"
        fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
        fontWeight={600}
        m={2}
      >
        Virtual Accounts
      </Typography>

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
          src={virtualAccountImage}
          alt="Comprehensive System Map"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={{
              ...calculateStyle(area),
              boxSizing: "border-box",
              transition: "all 0.2s ease-in-out",
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
