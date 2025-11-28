"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { walletApi } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { colorLegends, CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

const ImageMap = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // --- Original SVG dimensions ---
  const ORIGINAL_WIDTH = 1848;
  const ORIGINAL_HEIGHT = 4846;

  // -------------------------------
  // Resize container
  // -------------------------------
  useEffect(() => {
    const updateSize = () => {
      const container = document.getElementById("image-map-container");
      if (container) setContainerWidth(container.offsetWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // -------------------------------
  // Click Handler
  // -------------------------------
  const handleAreaClick = (area: any) => {
    if (area.link && area.link !== "#") router.push(area.link);
  };

  // -------------------------------
  // Convert SVG coordinates → %
  // -------------------------------
  const calculateStyle = (area: any) => {
    if (containerWidth === 0) return {};

    return {
      position: "absolute",
      left: `${(area.x / ORIGINAL_WIDTH) * 100}%`,
      top: `${(area.y / ORIGINAL_HEIGHT) * 100}%`,
      width: `${(area.width / ORIGINAL_WIDTH) * 100}%`,
      height: `${(area.height / ORIGINAL_HEIGHT) * 100}%`,
      cursor: "pointer",
      boxSizing: "border-box",
      transition: "all 0.25s ease-in-out",

      //   ...(area.status === "selected" && {
      //     border: "2px solid #1976d2",
      //     backgroundColor: "rgba(25,118,210,0.2)",
      //   }),
    };
  };

  // -------------------------------
  // Areas extracted from SVG
  // -------------------------------
  const areas = [
    {
      id: 1,
      x: 35.0997,
      y: 40.3646,
      width: 487.886,
      height: 89.5042,
      link: "/private-create-withdrawal",
      title: "private/create-withdrawal",
    },
    {
      id: 2,
      x: 29.8347,
      y: 877.4928,
      width: 542.2905,
      height: 107.0541,
      link: "/private-get-currency-network",
      title: "private/get-currency-network",
    },
    {
      id: 3,
      x: 33.3447,
      y: 2141.0826,
      width: 512.4558,
      height: 100.0341,
      link: "/private-get-deposit-address",
      title: "private/get-deposit-address",
    },
    {
      id: 4,
      x: 24.5698,
      y: 2969.4358,
      width: 500.1709,
      height: 105.2991,
      link: "/private-get-deposit-history",
      title: "private/get-deposit-history",
    },
    {
      id: 5,
      x: 24.5698,
      y: 3827.6239,
      width: 551.0655,
      height: 100.0341,
      link: "/private-get-withdrawal-history",
      title: "private/get-withdrawal-history",
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
        <Stack direction={"row"} alignItems={"center"} mt={5}>
          <Image
            src={CommonBackIcon}
            alt="back"
            width={isMobile ? 24 : 40}
            height={isMobile ? 24 : 40}
            onClick={() => router.push("/crypto-com-exchange-api-v1")}
            style={{ cursor: "pointer" }}
          />

          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
            Wallet API
          </Typography>
        </Stack>
      </Stack>

      {/* Checkbox form */}
      <Box mt={3} mb={4}>
        <CheckboxForm />
      </Box>

      {/* ---------------- Image Map ---------------- */}
      <Box id="image-map-container" sx={{ position: "relative" }}>
        <Image
          src={walletApi}
          alt="Wallet API Map"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            onClick={() => handleAreaClick(area)}
            title={area.title}
          />
        ))}
      </Box>

      {/* ---------------- Legend Popup ---------------- */}
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

export default ImageMap;
