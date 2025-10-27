"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface ImageItem {
  src?: string | StaticImageData;
  route?: string;
  alt?: string;
}

interface CommonPageProps {
  src?: string | StaticImageData;
  images?: ImageItem[];
  backRoute: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  hideButtonsOnRoutes?: string[];
}

const MultiImagesNoBtn: React.FC<CommonPageProps> = ({
  src,
  images,
  backRoute,
  pageTitle,
  onChange,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const handleImageClick = useCallback(
    (route: string) => {
      if (route) {
        router.push(route);
      }
    },
    [router],
  );

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        mt={{ md: 2, xs: 4 }}
        mb={{ md: 4, sm: 3, xs: 4 }}
        gap={{ xs: 2, md: 0 }}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap" flexGrow={1}>
          <Image
            src={CommonBackIcon}
            alt="Back"
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
            {pageTitle}
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

      {Array.isArray(images) && images.length > 0 ? (
        <Stack direction="column" spacing={0} alignItems="center" useFlexGap>
          {images.map((img, idx) => (
            <Box
              key={img.route || idx}
              sx={{
                mt: 2,
                p: 0,
                width: "100%",
                cursor: img.route ? "pointer" : undefined,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={() => img.route && handleImageClick(img.route)}
            >
              <Image
                src={img.src as string | StaticImageData}
                alt={img.alt || `Image ${idx + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Stack>
      ) : (
        src && (
          <Box
            sx={{
              m: 0,
              p: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={src}
              alt={pageTitle}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        )
      )}
    </Box>
  );
};

export default MultiImagesNoBtn;
