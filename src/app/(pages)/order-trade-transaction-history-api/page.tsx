"use client";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Section } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { colorLegends, MultiBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

const ImageMap = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
      top: `${(area.y / 3982) * 100}%`,
      width: `${(area.width / 1848) * 100}%`,
      height: `${(area.height / 3982) * 100}%`,
      cursor: area.link && area.link !== "#" ? "pointer" : "default",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  // Areas data from your SVG
  const areas = [
    {
      id: 1,
      x: 14.04,
      y: 293.083,
      width: 600.205,
      height: 149.174,
      title: "section1",
      link: "/private-get-order-history",
      status: "active",
    },
    {
      id: 2,
      x: 22.815,
      y: 1604.057,
      width: 415.932,
      height: 147.419,
      title: "section2",
      link: "#section2",
      status: "active",
    },
    {
      id: 3,
      x: 38.61,
      y: 2779.897,
      width: 417.687,
      height: 168.479,
      title: "section3",
      link: "#section3",
      status: "selected",
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
            Product Features (1st Release)
          </Typography>
        </Stack>

        {/* Legend Toggle */}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ ml: "auto", mt: 5 }}
        >
          <Typography
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
            fontWeight={600}
            color="#0246BC"
            sx={{ mr: 1, textTransform: "uppercase" }}
          >
            Color Legends (Key)
          </Typography>
          <KeyboardArrowDownIcon
            onClick={toggleDropdown}
            sx={{
              fontSize: { xs: 28, md: 30 },
              color: "#0246BC",
              border: "2px solid",
              borderRadius: "50%",
              cursor: "pointer",
              p: 0.3,
            }}
          />
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
          src={Section}
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
              ...(area.status === "selected" && {
                border: "2px solid #1976d2",
                backgroundColor: "rgba(25, 118, 210, 0.1)",
              }),
            }}
            onClick={() => handleAreaClick(area)}
            title={area.title || `Section ${area.id}`}
          />
        ))}
      </Box>

      {/* Legend Dropdown */}
      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.4)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            sx={{
              position: "fixed",
              top: { xs: "20%", md: "150px" },
              right: { xs: "10%", md: "50px" },
              width: { xs: "80%", sm: "400px" },
              background: "#fff",
              borderRadius: 2,
              boxShadow: 4,
              p: 2,
              zIndex: 1300,
              animation: "fadeIn 0.3s ease",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={colorLegends}
              alt="Color Legend"
              width={400}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageMap;
