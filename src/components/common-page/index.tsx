"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";

interface CommonPageProps {
  src: string | StaticImageData;
  backRoute?: string;
  pageTitle: string;
  onChange?: (selectedValue: string, page: string) => void;
  showBtn?: boolean;
}

const CommonPage: React.FC<CommonPageProps> = ({
  src,
  backRoute = "/",
  pageTitle,
  showBtn = false,
  onChange,
}) => {
  const router = useRouter();

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
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
        {showBtn && (
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
            onClick={() => router.push("/sequence-page")}
          >
            Sequence
          </Button>
        )}
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={onChange} />
      </Box>
      <Image
        src={src}
        alt={pageTitle}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%", padding: "20px" }}
      />
    </Box>
  );
};

export default CommonPage;
