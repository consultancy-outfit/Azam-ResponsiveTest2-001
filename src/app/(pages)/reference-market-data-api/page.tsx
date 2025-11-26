"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReferenceMarketDataAPIImage } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { colorLegends, MultiBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

const ReferenceMarketDataApi = () => {
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
      top: `${(area.y / 6222) * 100}%`,
      width: `${(area.width / 1810) * 100}%`,
      height: `${(area.height / 6222) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/crypto-com-exchange-api-v1");
  }, [router]);

  const areas = [
    {
      id: 1,
      x: -25.783,
      y: 5.157,
      width: 465.821,
      height: 135.793,
      title: "section",
      link: "/reference-account-balance",
      status: "active",
    },
    {
      id: 2,
      x: 5.157,
      y: 1065.717,
      width: 479.573,
      height: 130.636,
      title: "/",
      link: "/reference-account-balance-1",
      status: "coming soon",
    },
    {
      id: 3,
      x: 12.032,
      y: 2114.245,
      width: 410.817,
      height: 166.733,
      title: "",
      link: "/reference-account-balance-2",
      status: "coming soon",
    },
    {
      id: 4,
      x: 3.438,
      y: 2863.685,
      width: 448.632,
      height: 171.89,
      title: "",
      link: "/reference-account-balance-3",
      status: "coming soon",
    },
    {
      id: 5,
      x: 1.719,
      y: 3766.106,
      width: 398.784,
      height: 175.328,
      title: "",
      link: "/reference-account-balance-4",
      status: "coming soon",
    },
    {
      id: 6,
      x: 1.719,
      y: 4568.832,
      width: 415.973,
      height: 149.544,
      title: "",
      link: "/reference-account-balance-5",
      status: "coming soon",
    },
    {
      id: 7,
      x: 3.438,
      y: 5201.387,
      width: 618.803,
      height: 149.544,
      title: "",
      link: "/reference-account-balance-6",
      status: "coming soon",
    },
    {
      id: 8,
      x: 10.313,
      y: 5581.263,
      width: 371.282,
      height: 130.636,
      title: "",
      link: "/reference-account-balance-7",
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
        {/* Back Icon + Title */}
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
            Reference and Market Data API
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
          src={ReferenceMarketDataAPIImage}
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

export default ReferenceMarketDataApi;
