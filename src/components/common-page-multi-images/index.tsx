"use client";

import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface ImageItem {
  src: string | StaticImageData;
  route: string;
  alt?: string;
}

interface CommonPageProps {
  src?: string | StaticImageData;
  images?: ImageItem[];
  imageCount?: number;
  backRoute?: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
}

const CommonPage: React.FC<CommonPageProps> = ({
  src,
  images,
  imageCount,
  backRoute = "/",
  pageTitle,
  onChange,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const handleImageClick = (route: string) => {
    router.push(route);
  };

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={pageTitle}
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
          sx={{ fontFamily: "inherit" }}
        >
          {pageTitle}
        </Typography>
      </Stack>

      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={onChange} />
      </Box>

      {/* Render multiple images if available */}
      {Array.isArray(images) && images.length > 0 ? (
        <Stack direction="column" spacing={2} flexWrap="wrap">
          {images.slice(0, imageCount || images.length).map((img, idx) => {
            if (!img.src) return null;

            return (
              <Image
                key={img.route || idx}
                src={img.src}
                alt={img.alt || pageTitle}
                width={80}
                height={80}
                style={{
                  width: 80,
                  height: 80,
                  cursor: img.route ? "pointer" : undefined,
                  marginBottom: 8,
                }}
                onClick={() => handleImageClick(img.route)}
              />
            );
          })}
        </Stack>
      ) : (
        src && (
          <Image
            src={src}
            alt={pageTitle}
            width={40}
            height={40}
            style={{ width: "100%", height: "100%" }}
          />
        )
      )}
    </Box>
  );
};

export default CommonPage;
