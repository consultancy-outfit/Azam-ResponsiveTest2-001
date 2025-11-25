"use client";
import { useState, useEffect, useCallback } from "react";
import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { ScryptApi7 } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

const CategoryCodesSummaryPage = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [hoveredArea, setHoveredArea] = useState(null);

  // Areas data extracted from your SVG
  const areas: any[] = [
    {
      id: "scrypt-api-page1",
      x: 36,
      y: 80,
      width: 214,
      height: 50,
      link: "/trade-1",
    },
   
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
    router.push("/scrypt-api");
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
            {"Scrypt API 1.0.0 / Orders /"}
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
      <Box
        display="flex"
        gap={2}
        justifyContent="flex-end"
        marginBottom={2}
        flexWrap="wrap"
      >
        <Button
          sx={{
            backgroundColor: "#5A5867",
            borderRadius: "6px",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#4A4857" },
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            textTransform: "capitalize",
            fontFamily: "Outfit, inherit",
          }}
          variant="contained"
          color="primary"
          onClick={() => window.open("/market-data-page1")}
        >
          Replace During Fill
        </Button>

        <Button
          sx={{
            backgroundColor: "#5A5867",
            borderRadius: "6px",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#4A4857" },
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            textTransform: "capitalize",
            fontFamily: "Outfit, inherit",
          }}
          variant="contained"
          color="primary"
          onClick={() => window.open("/market-data-page2")}
        >
          Replace to Increase Quantity
        </Button>

        <Button
          sx={{
            backgroundColor: "#5A5867",
            borderRadius: "6px",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#4A4857" },
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            textTransform: "capitalize",
            fontFamily: "Outfit, inherit",
          }}
          variant="contained"
          color="primary"
          onClick={() =>
            router.push(
              "/market-data-page3",
              
            )
          }
        >
          Canceled Order
        </Button>

        <Button
          sx={{
            backgroundColor: "#5A5867",
            borderRadius: "6px",
            color: "#FFFFFF",
            "&:hover": { backgroundColor: "#4A4857" },
            cursor: "pointer",
            fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
            padding: { xs: "6px 12px", md: "8px 16px" },
            textTransform: "capitalize",
            fontFamily: "Outfit, inherit",
          }}
          variant="contained"
          color="primary"
          onClick={() =>
              router.push(
                "/market-data-page4", 
              )
          }
        >
         Filled Order
        </Button>
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
            src={ScryptApi7}
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
          />
        ))}
      </Paper>
    </Box>
  );
};

export default CategoryCodesSummaryPage;
