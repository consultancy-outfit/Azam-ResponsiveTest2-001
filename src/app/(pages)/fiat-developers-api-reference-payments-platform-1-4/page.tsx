"use client";
import { useState, useEffect, useCallback } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { FiatDevelopersPaymentImageFull14 } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

const FiatDevelopersAPIReferencePaymentsPlatform14Page = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [hoveredArea, setHoveredArea] = useState(null);

  // Areas data extracted from your SVG
  const areas = [
    {
      id: "scrypt-api-page1",
      x: 1300,
      y: 40,
      width: 370,
      height: 15,
      link: "/fiat-developers-api-reference-payments-platform-1-4-111-Individual-end-user-object",
    },
    // {
    //   id: "scrypt-api-page2",
    //   x: 38,
    //   y: 1214,
    //   width: 152,
    //   height: 86,

    //   link: "/scrypt-api-page2",
    // },
    // {
    //   id: "scrypt-api-page3",
    //   x: 38,
    //   y: 4574,
    //   width: 122,
    //   height: 82,
    //   link: "/scrypt-api-page3",
    // },
    // {
    //   id: "scrypt-api-page4",
    //   x: 38,
    //   y: 6174,
    //   width: 122,
    //   height: 100,

    //   link: "/scrypt-api-page4",
    // },
    // {
    //   id: "cancel",
    //   x: 38,
    //   y: 7914,
    //   width: 150,
    //   height: 88,
    //   link: "/scrypt-api-page5",
    // },
  ];

  useEffect(() => {
    // Set initial container width and handle resizing
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
    // Navigate to the page directly
    router.push(area.link);
  };

  // Calculate positions and sizes based on container width
  const calculateStyle = (area: any) => {
    if (containerWidth === 0) return {};

    const scaleFactor = containerWidth / 1884;

    return {
      position: "absolute",
      left: `${(area.x / 1840) * 100}%`,
      top: `${(area.y / 9600) * 100}%`,
      width: `${(area.width / 1384) * 100}%`,
      height: `${(area.height / 6080) * 100}%`,
      //  backgroundColor: "rgba(0, 0, 0, 0.2)",
      //  border: "2px solid black",
      cursor: "pointer",
      transition: "all 0.2s ease",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/fiat-developers-api-reference-payments-platform");
  }, [router]);

  const onChange = () => {};

  return (
    <Box m={2}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        my={3}
        gap={{ xs: 2, md: 0 }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          flexGrow={1}
          mx={2}
        >
          <Image
            src={CommonBackIcon}
            alt={""}
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
            fontWeight={{ md: 600, xs: 500 }}
            ml={{ md: 2, xs: 1 }}
            sx={{ fontFamily: "Outfit, inherit" }}
          >
            {"Payments Platform"}
          </Typography>
        </Box>
      </Stack>

      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "left" }}
        justifyContent="space-between"
        marginBottom={2}
        gap={0}
      >
        <Box flexGrow={1}>
          <CheckboxForm onChange={onChange} />
        </Box>
      </Box>

      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
        id="image-map-container"
      >
        {/* Background Image */}
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={FiatDevelopersPaymentImageFull14}
            alt="Category Codes Summary Image"
            width={1884}
            height={2780}
            layout="responsive"
            priority
          />
        </Box>

        {/* Interactive Areas */}
        {areas.map((area: any) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            onClick={() => handleAreaClick(area)}
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
            title={area.title}
            border={"1px solid red"}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default FiatDevelopersAPIReferencePaymentsPlatform14Page;
