"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { payoutMainImage } from "@/assets";
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
      left: `${(area.x / 1860) * 100}%`,
      top: `${(area.y / 19703) * 100}%`,
      width: `${(area.width / 1860) * 100}%`,
      height: `${(area.height / 19703) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/clear-junction-reference");
  }, [router]);

  const areas = [
    {
      id: 1,
      x: 7.066,
      y: 14.131,
      width: 536.98,
      height: 107.749,
      title: "",
      link: "payout-sec-1",
      status: "coming soon",
    },
    {
      id: 2,
      x: 51.225,
      y: 777.208,
      width: 438.063,
      height: 113.048,
      title: "",
      link: "/payout-sec-2",
      status: "coming soon",
    },
    {
      id: 3,
      x: 56.524,
      y: 1854.701,
      width: 471.624,
      height: 116.581,
      title: "",
      link: "/payout-sec-3",
      status: "coming soon",
    },
    {
      id: 6,
      x: 26.496,
      y: 2160.285,
      width: 584.672,
      height: 111.282,
      title: "",
      link: "'/payout-sec-4",
      status: "coming soon",
    },
    {
      id: 4,
      x: 35.328,
      y: 3264.274,
      width: 446.895,
      height: 104.217,
      title: "",
      link: "/payout-sec-5",
      status: "coming soon",
    },
    {
      id: 5,
      x: 26.496,
      y: 3562.792,
      width: 671.225,
      height: 136.011,
      title: "",
      link: "/payout-sec-6",
      status: "coming soon",
    },
    {
      id: 7,
      x: 58.291,
      y: 4663.248,
      width: 436.296,
      height: 141.311,
      title: "",
      link: "/payout-sec-7",
      status: "coming soon",
    },
    {
      id: 9,
      x: 35.328,
      y: 4972.365,
      width: 722.45,
      height: 113.048,
      title: "",
      link: "/payout-sec-8",
      status: "coming soon",
    },
    {
      id: 10,
      x: 33.561,
      y: 6574.473,
      width: 446.895,
      height: 137.778,
      title: "",
      link: "/payout-sec-9",
      status: "coming soon",
    },
    {
      id: 11,
      x: 40.627,
      y: 6904.786,
      width: 605.869,
      height: 144.843,
      title: "",
      link: "/payout-sec-10",
      status: "coming soon",
    },
    {
      id: 12,
      x: 40.627,
      y: 8515.726,
      width: 475.157,
      height: 153.675,
      title: "",
      link: "/payout-sec-11",
      status: "coming soon",
    },
    {
      id: 14,
      x: 42.393,
      y: 8835.442,
      width: 722.45,
      height: 123.647,
      title: "",
      link: "/payout-sec-12",
      status: "coming soon",
    },
    {
      id: 16,
      x: 33.561,
      y: 9942.963,
      width: 462.792,
      height: 111.282,
      title: "",
      link: "/payout-sec-13",
      status: "coming soon",
    },
    {
      id: 18,
      x: 35.328,
      y: 10243.248,
      width: 561.709,
      height: 158.974,
      title: "",
      link: "/payout-sec-14",
      status: "coming soon",
    },
    {
      id: 20,
      x: 17.664,
      y: 11336.638,
      width: 492.821,
      height: 130.712,
      title: "",
      link: "/payout-sec-15",
      status: "coming soon",
    },
    {
      id: 22,
      x: 31.795,
      y: 11760.57,
      width: 551.111,
      height: 120.114,
      title: "",
      link: "/payout-sec-6",
      status: "coming soon",
    },
    {
      id: 24,
      x: 40.627,
      y: 13428.034,
      width: 503.419,
      height: 128.946,
      title: "",
      link: "/payout-sec-17",
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
            Clear junction API / Payout /
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
          src={payoutMainImage}
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
