"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { CommonBackIcon } from "@/assets/common-assets";
import { CheckboxForm } from "../checkbox-form";
import { mainTestLogo } from "@/assets";

interface CommonPageProps {
  src: string | StaticImageData;
  backRoute?: string;
  onChange?: (selectedValue: string, page: string) => void;
}

const ProductCommonPage: React.FC<CommonPageProps> = ({
  src,
  backRoute = "/",
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
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 4, sm: 3, xs: 2 }}
      >
        <Image
          src={CommonBackIcon}
          alt={backRoute}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Stack flexDirection="row" justifyContent={"center"} width={"100%"}>
          <Image
            src={mainTestLogo}
            alt={"Agentic Main Logo"}
            width={350}
            height={60}
            onClick={onBackIconClick}
            style={{ cursor: "pointer" }}
          />
        </Stack>
      </Stack>
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm onChange={onChange} />
      </Box>
      <Image
        src={src}
        alt={"Product Common Page Image"}
        width={40}
        height={40}
        style={{ width: "100%", height: "100%", padding: "20px" }}
      />
    </Box>
  );
};

export default ProductCommonPage;
