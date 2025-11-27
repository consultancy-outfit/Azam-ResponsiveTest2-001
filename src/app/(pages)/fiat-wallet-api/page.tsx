"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@mui/system";

import { CheckboxForm } from "@/components/checkbox-form";
import { CommonBackIcon, colorLegends } from "@/assets/common-assets";
import { fiatWalletApi } from "@/assets";

const ImageMapSection2 = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // ORIGINAL SVG size
  const ORIGINAL_WIDTH = 1848;
  const ORIGINAL_HEIGHT = 16200;

  // -----------------------------------
  // Resize container for responsive map
  // -----------------------------------
  useEffect(() => {
    const updateSize = () => {
      const el = document.getElementById("image-map-container");
      if (el) setContainerWidth(el.offsetWidth);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // -----------------------------------
  // Convert absolute SVG coords to %
  // -----------------------------------
  const calculateStyle = (area: any) => {
    if (!containerWidth) return {};

    return {
      position: "absolute",
      left: `${(area.x / ORIGINAL_WIDTH) * 100}%`,
      top: `${(area.y / ORIGINAL_HEIGHT) * 100}%`,
      width: `${(area.width / ORIGINAL_WIDTH) * 100}%`,
      height: `${(area.height / ORIGINAL_HEIGHT) * 100}%`,
      cursor: "pointer",
      boxSizing: "border-box",
      transition: "0.25s ease",
      //   border:
      //     area.status === "selected"
      //       ? "2px solid #1976d2"
      //       : "2px solid transparent",
      //   "&:hover": {
      //     backgroundColor: "rgba(255,255,255,0.2)",
      //     border: "2px solid white",
      //   },
    };
  };

  // -----------------------------------
  // Areas extracted from your long SVG
  // -----------------------------------
  const areas = [
    {
      id: 1,
      x: 33.34,
      y: 29.83,
      width: 507.19,
      height: 94.76,
      link: "/private-fiat-fiat-deposit-info",
      title: "private/fiat/fiat-deposit-into",
    },
    {
      id: 2,
      x: 33.34,
      y: 1848,
      width: 568.61,
      height: 110.56,
      link: "/private-fiat-fiat-deposit-history",
      title: "private/fiat/fiat-deposit-history",
    },
    {
      id: 3,
      x: 28.07,
      y: 3506.46,
      width: 559.84,
      height: 115.82,
      link: "/private-fiat-fiat-withdraw-history",
      title: "private/fiat/fiat-withdraw-history",
    },
    {
      id: 4,
      x: 24.56,
      y: 5331.64,
      width: 587.92,
      height: 115.82,
      link: "/private-fiat-fiat-create-withdraw",
      title: "private/fiat/fiat-create-withdraw",
    },
    {
      id: 5,
      x: 28.07,
      y: 7355.14,
      width: 601.96,
      height: 98.27,
      link: "/private-fiat-fiat-transaction-quota",
      title: "private/fiat/fiat-transaction-quota",
    },
    {
      id: 6,
      x: 26.32,
      y: 10033.25,
      width: 600.2,
      height: 142.15,
      link: "/private-fiat-fiat-transaction-limit",
      title: "private/fiat/fiat-transaction-limit",
    },
    {
      id: 7,
      x: 22.81,
      y: 12786.82,
      width: 616,
      height: 138.64,
      link: "/private-fiat-fiat-get-bank-accounts",
      title: "private/fiat/fiat-get-bank-accounts",
      status: "selected",
    },
  ];

  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box sx={{ py: 5, px: 3 }}>
      {/* ---------------- Header ---------------- */}
      <Stack
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
      >
        <Stack direction={"row"} alignItems={"center"} mb={{ xs: 2, md: 3 }}>
          <Image
            src={CommonBackIcon}
            alt="back"
            width={isMobile ? 24 : 40}
            height={isMobile ? 24 : 40}
            style={{ cursor: "pointer" }}
            onClick={() => router.push("/")}
          />

          <Typography
            variant="h5"
            color="#5A5867"
            fontSize={{ xs: "1rem", sm: "24px", md: "28px" }}
            fontWeight={{ md: 600, xs: 500 }}
            sx={{
              ml: 2,
              fontFamily: "inherit",
            }}
          >
            Fiat Wallet API
          </Typography>
        </Stack>
      </Stack>

      {/* ---------------- Checkbox Form ---------------- */}
      <Box mb={4}>
        <CheckboxForm />
      </Box>

      {/* ---------------- Image Map ---------------- */}
      <Box id="image-map-container" sx={{ position: "relative", mx: 2 }}>
        <Image
          src={fiatWalletApi}
          alt="Wallet API Extended"
          style={{ width: "100%", height: "auto" }}
        />

        {areas.map((area) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            title={area.title}
            onClick={() => router.push(area.link)}
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
              boxShadow: 4,
              zIndex: 1300,
            }}
          >
            <Image
              src={colorLegends}
              alt="Legend"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ImageMapSection2;
