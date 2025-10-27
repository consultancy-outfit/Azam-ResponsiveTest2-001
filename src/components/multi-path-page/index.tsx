"use client";

import React, { useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { MultiBackIcon } from "@/assets/common-assets";
import type { ResponsiveStyleValue } from "@mui/system";

type MultiPathPageItem = {
  key: string;
  link?: string;
  icon: string | StaticImageData;
  title?: string;
};

type MultiPathPageProps = {
  arrayData: MultiPathPageItem[];
  pageTitle: string;
  backRoute?: string;
  fontSize?: ResponsiveStyleValue<string>;
  iconWidth?: string;
  background?: string;
};

const MultiPathPage: React.FC<MultiPathPageProps> = ({
  arrayData,
  pageTitle,
  backRoute = "/",
  fontSize = { xs: "20px", sm: "30px", md: "40px" },
  background = "#e7f0ff",
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
        mb={{ md: 5, sm: 3, xs: 2 }}
      >
        <Image
          src={MultiBackIcon}
          alt={pageTitle}
          width={40}
          height={40}
          onClick={onBackIconClick}
          style={{ cursor: "pointer" }}
        />
        <Typography
          variant="h5"
          color="#0246BC"
          fontSize={fontSize}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
          sx={{
            fontFamily: "inherit",
          }}
        >
          {pageTitle}
        </Typography>
      </Stack>
      <Grid container spacing={2}>
        {arrayData.map((item) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.key}>
            <Card
              onClick={() => {
                if (item.link) {
                  router.push(item.link);
                }
              }}
              sx={{
                width: "100%",
                height: "100%",
                backgroundColor: background,
                cursor: item.link ? "pointer" : "default",
                borderRadius: 6,
                textAlign: "center",
                boxShadow: "none",
                p: 4,
                alignContent: "center",
              }}
            >
              <Image
                src={item.icon}
                alt={item.title ?? item.key}
                width={200}
                height={200}
                style={{ width: "100%", objectFit: "contain" }}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  color="#3571b0"
                  fontSize={{ xs: "1.2rem", sm: "18px", md: "32px" }}
                  fontWeight={{ md: 600, xs: 500 }}
                  sx={{
                    fontFamily: "inherit",
                  }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MultiPathPage;
