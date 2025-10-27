"use client";

import React, { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { colorLegends, MultiBackIcon } from "@/assets/common-assets";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";

interface CommonBoxPageProps {
  mainTitle: string;
  backRoute?: string;
  border?: boolean;
  showColorLegend?: boolean;
  arrayData: {
    key: string;
    link?: string;
    icon?: string;
    bgColor?: string;
    title: string;
    target?: string;
  }[];
}

export const CommonBoxPage: React.FC<CommonBoxPageProps> = ({
  mainTitle,
  arrayData,
  backRoute,
  border,
  showColorLegend,
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const onBackIconClick = useCallback(() => {
    if (backRoute) {
      router.push(backRoute);
    }
  }, [router, backRoute]);

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        flexWrap={"wrap"}
        mt={2}
        mb={4}
      >
        <Stack flexDirection="row" alignItems="center">
          {backRoute && (<Image
            src={MultiBackIcon}
            alt='back icon'
            width={40}
            height={40}
            onClick={onBackIconClick}
            style={{
              cursor: "pointer",
              marginLeft: border ? 0 : 20,
            }}
          />
          )
          }

          <Typography
            variant="h3"
            color="#0246BC"
            fontSize={{ xs: "1rem", sm: "1.5rem", md: "2.5rem" }}
            fontWeight={600}
            ml={2}
          >
            {mainTitle}
          </Typography>
        </Stack>

        {showColorLegend && (
          <Typography
            variant="h3"
            fontWeight={600}
            ml={2}
            display="flex"
            alignItems="center"
          >
            <Typography
              component="span"
              fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.5rem" }}
              fontWeight={600}
              color="#0246BC"
              sx={{ mr: 1, textTransform: "uppercase" }}
            >
              Color Legends (Key)
            </Typography>
            <span>
              <KeyboardArrowDownIcon
                onClick={toggleDropdown}
                sx={{
                  fontSize: { xs: 28, md: 30 },
                  color: "#0246BC",
                  border: "2px solid",
                  borderRadius: "40px",
                  cursor: "pointer",
                }}
              />
            </span>
          </Typography>
        )
        }
      </Stack>

      <Grid container spacing={2}
        sx={{
          border: border ? "5px dashed #0246BC" : 'none',
          p: 4,
          borderRadius: 4,
          boxSizing: "border-box",

        }}
      >
        {arrayData.map((item) => (
          <Grid size={{ xs: 12, md: 6, lg: 4 }} key={item.key}>
            <Card
              onClick={() => {
                if (item.link) {
                  if (item.target === "_blank") {
                    window.open(item.link, "_blank");
                  } else {
                    router.push(item.link);
                  }
                }
              }}
              sx={{
                width: "100%",
                height: "100%",
                ...(!item.bgColor && !item.icon ? { minHeight: "300px" } : {}),
                backgroundColor: "#e7f0ff",
                cursor: item.link ? "pointer" : "default",
                borderRadius: 6,
                textAlign: "center",
                boxShadow: "none",
                p: 4,
                alignContent: "center",
              }}
            >
              {item.bgColor && (
                <Box sx={{ width: "100%", textAlign: "-webkit-right" }}>
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      bgcolor: item.bgColor,
                      borderRadius: 2,
                      fontWeight: 600,
                    }}
                  />
                </Box>
              )
              }

              {item.icon && (
                <Image
                  src={item.icon}
                  alt={item.title ?? item.key}
                  width={200}
                  height={200}
                  style={{ width: "100%", objectFit: "contain" }}
                />
              )}

              <CardContent>
                <Typography
                  variant="h5"
                  color={!item.bgColor && !item.icon ? "#000" : "#3571b0"}
                  fontSize={{ xs: "1.2rem", sm: "18px", md: "32px" }}
                  fontWeight={{ md: 600, xs: 500 }}
                  sx={{ fontFamily: "inherit", }}
                >
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {isOpen && (
        <>
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0,0,0,0.3)",
              zIndex: 1200,
            }}
            onClick={() => setIsOpen(false)}
          />
          <Box
            ref={legendRef}
            sx={{
              position: "absolute",
              top: "150px",
              right: "50px",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: 3,
              p: 1,
              zIndex: 1300,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={colorLegends.src}
              alt="Color Legend"
              width={40}
              height={40}
              style={{ width: "100%", height: "100%" }}
            />
          </Box>
        </>
      )}
    </Box>
  );
};