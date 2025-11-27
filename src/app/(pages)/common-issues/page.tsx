"use client";

import { useState } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { commonIssuesImg } from "@/assets";
import { CheckboxForm } from "@/components/checkbox-form";
import { colorLegends, CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

const ImageMap = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

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
            onClick={() => router.push("/")}
            style={{ cursor: "pointer" }}
          />

          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
            Common Issues
          </Typography>
        </Stack>
      </Stack>

      {/* Checkbox form */}
      <Box mt={3} mb={4}>
        <CheckboxForm />
      </Box>

      {/* ---------------- Image Map ---------------- */}
      <Box id="image-map-container" sx={{ position: "relative", mx: 2 }}>
        <Image
          src={commonIssuesImg}
          alt="Wallet API Map"
          style={{ width: "100%", height: "auto" }}
        />
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
