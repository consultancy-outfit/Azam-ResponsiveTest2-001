"use client";
import { Box, Stack, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";
import imageMapResize from "image-map-resizer";

interface AreaItem {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: string;
  target?: string;
}

interface CommonPageProps {
  image?: string;
  backRoute?: string;
  pageTitle?: string;
  onChange?: (selectedValue: string, page: string) => void;
  amendmentButtonRoute1?: string;
  amendmentButtonRoute2?: string;
  amendmentButtonRoute3?: string;
  amendmentButtonTitle1?: string;
  amendmentButtonTitle2?: string;
  amendmentButtonTitle3?: string;
  downloadUrl?: string;
  downloadFileName?: string;
  areas?: AreaItem[];
  target?: string,
}

const CommonImgMapPage: React.FC<CommonPageProps> = ({
  backRoute,
  pageTitle,
  onChange,
  amendmentButtonRoute1,
  amendmentButtonRoute2,
  amendmentButtonRoute3,
  amendmentButtonTitle1,
  amendmentButtonTitle2,
  amendmentButtonTitle3,
  downloadUrl,
  downloadFileName,
  image,
  areas = [],
  target,
}) => {
  const router = useRouter();
  const imgRef = useRef<HTMLImageElement>(null);

  // Call imageMapResize after image and map are rendered
  useEffect(() => {
    if (typeof window !== "undefined" && imgRef.current && areas.length > 0) {
      import("image-map-resizer").then((mod) => {
        mod.default();
      });
    }
  }, [image, areas]);

  const onBackIconClick = useCallback(() => {
    if (backRoute) {
      router.push(backRoute);
    }
  }, [router, backRoute]);

  const onAmendmentButtonClick1 = useCallback(() => {
    if (downloadUrl && downloadFileName) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadFileName;
      link.click();
    } else if (amendmentButtonRoute1) {
      router.push(amendmentButtonRoute1);
    } else {
      console.warn("No action available");
    }
  }, [downloadUrl, downloadFileName, amendmentButtonRoute1, router]);

  const onAmendmentButtonClick2 = useCallback(() => {
    if (amendmentButtonRoute2) router.push(amendmentButtonRoute2);
  }, [router, amendmentButtonRoute2]);
  const onAmendmentButtonClick3 = useCallback(() => {
    if (amendmentButtonRoute3) router.push(amendmentButtonRoute3);
  }, [router, amendmentButtonRoute3]);

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
          {backRoute && (
            <Image
              src={CommonBackIcon}
              alt={pageTitle || "Back"}
              width={40}
              height={40}
              onClick={onBackIconClick}
              style={{ cursor: "pointer" }}
            />
          )
          }
          {pageTitle && (
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
          )}
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
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", ml: "auto" }}>
          {amendmentButtonTitle1 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick1}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle1}
            </Button>
          )}
          {amendmentButtonTitle2 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick2}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle2}
            </Button>
          )}
          {amendmentButtonTitle3 && (
            <Button
              variant="contained"
              onClick={onAmendmentButtonClick3}
              sx={{
                backgroundColor: "#5A5867",
                color: "#FFFFFF",
                "&:hover": { backgroundColor: "#4A4857" },
                cursor: "pointer",
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
                padding: { xs: "6px 12px", md: "8px 16px" },
                textTransform: "capitalize",
                fontFamily: "Outfit, inherit",
              }}
            >
              {amendmentButtonTitle3}
            </Button>
          )}
        </Box>
      </Box>
      {image && (
        <>
          <Image
            ref={imgRef}
            src={image}
            alt="image map"
            useMap={areas && areas.length > 0 ? "#image-map" : undefined}
            width={200}
            height={200}
            style={{ width: "100%", height: "100%" }}
          />
          {areas && areas.length > 0 && (
            <map name="image-map">
              {areas.map((area, index) => (
                <area
                  key={index}
                  alt={area.alt}
                  title={area.title}
                  coords={area.coords}
                  shape={area.shape}
                  target={area.target}
                  href={area.href}
                  onClick={(e) => {
                    if (!area.target || area.target === "_self") {
                      e.preventDefault();
                      router.push(area.href);
                    }
                  }}
                />
              ))}
            </map>
          )}
        </>
      )}
    </Box>
  );
};

export default CommonImgMapPage;