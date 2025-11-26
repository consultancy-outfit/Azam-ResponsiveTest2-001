"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";
import { advancedordermanagementapiMain } from "@/assets";

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
      top: `${(area.y / 6600) * 100}%`,
      width: `${(area.width / 1848) * 100}%`,
      height: `${(area.height / 6600) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/crypto-com-exchange-api-v1");
  }, [router]);

  const areas = [
    {
      id: 8,
      x: 1.755,
      y: 8.775,
      width: 605.47,
      height: 205.333,
      title: "",
      link: "/advanced-order-management-api-sub-sec-1",
      status: "coming soon",
    },
    {
      id: 9,
      x: 1.755,
      y: 384.342,
      width: 540.536,
      height: 152.684,
      title: "",
      link: "/advanced-order-management-api-sub-sec-2",
      status: "coming soon",
    },
    {
      id: 10,
      x: 17.55,
      y: 782.724,
      width: 540.536,
      height: 126.359,
      title: "",
      link: "/advanced-order-management-api-sub-sec-3",
      status: "coming soon",
    },
    {
      id: 11,
      x: 15.795,
      y: 1154.781,
      width: 547.556,
      height: 177.254,
      title: "",
      link: "/advanced-order-management-api-sub-sec-4",
      status: "coming soon",
    },
    {
      id: 12,
      x: 24.57,
      y: 1540.877,
      width: 547.556,
      height: 170.234,
      title: "",
      link: "/advanced-order-management-api-sub-sec-5",
      status: "coming soon",
    },
    {
      id: 13,
      x: 17.55,
      y: 1928.729,
      width: 623.02,
      height: 179.009,
      title: "",
      link: "/advanced-order-management-api-sub-sec-6",
      status: "coming soon",
    },
    {
      id: 14,
      x: 3.51,
      y: 2320.091,
      width: 601.96,
      height: 166.724,
      title: "",
      link: "/advanced-order-management-api-sub-sec-7",
      status: "coming soon",
    },
    {
      id: 15,
      x: 15.795,
      y: 3746.895,
      width: 582.655,
      height: 126.359,
      title: "",
      link: "/advanced-order-management-api-sub-sec-8",
      status: "coming soon",
    },
    {
      id: 16,
      x: 15.795,
      y: 5147.373,
      width: 668.65,
      height: 168.479,
      title: "",
      link: "/advanced-order-management-api-sub-sec-9",
      status: "coming soon",
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
            Advanced Order Management API
          </Typography>
        </Stack>
      </Stack>

      {/* Checkbox Form */}
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>

      <Box
        id="image-map-container"
        sx={{ position: "relative", width: "100%" }}
      >
        <Image
          src={advancedordermanagementapiMain}
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
