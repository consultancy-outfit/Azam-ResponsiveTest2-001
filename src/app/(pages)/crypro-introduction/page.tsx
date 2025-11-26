"use client";
import { useCallback } from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { IntroductionCryptoImage } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";
import { useMediaQuery } from "@mui/system";

const ImageMap = () => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push("/crypto-com-exchange-api-v1");
  }, [router]);

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
            color="#024D9C"
            fontSize={{ xs: "1.2rem", sm: "1.8rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
            Introduction
          </Typography> 
        </Stack>
      </Stack>

      <Box
        id="image-map-container"
        sx={{ position: "relative", width: "100%" }}
      >
        <Image
          src={IntroductionCryptoImage}
          alt="Comprehensive System Map"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default ImageMap;
