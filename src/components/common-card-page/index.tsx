"use client";
import React from "react";
import {
  Box,
  CardContent,
  Container,
  Stack,
  Typography,
  Chip,
} from "@mui/material";
import { MultiBackIcon } from "@/assets/common-assets";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CheckboxForm } from "../checkbox-form";

interface CardItem {
  title: string;
  image: string;
  route?: string;
  data?: boolean;
}

interface CommonCardPageProps {
  backRoute?: string;
  pageTitle: string;
  cards: CardItem[];
  fontSize?: string;
}

// Function to generate random light colors
const generateLightColor = () => {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 50) + 20; // 20-50%
  const lightness = Math.floor(Math.random() * 20) + 85; // 85-105%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};

const CommonCardPage: React.FC<CommonCardPageProps> = ({
  backRoute = "/",
  pageTitle,
  cards,
  fontSize = "22px",
}) => {
  const router = useRouter();

  // Generate stable random colors for each card
  const cardColors = useMemo(() => {
    return cards.map(() => generateLightColor());
  }, [cards]);

  const onBackIconClick = useCallback(() => {
    router.push(backRoute);
  }, [router, backRoute]);

  const onCardClick = useCallback(
    (route?: string) => {
      if (route) {
        router.push(route);
      }
    },
    [router]
  );

  return (
    <Box p={{ md: 3, xs: 2 }}>
      <Stack
        flexDirection="row"
        alignItems="center"
        mt={{ md: 2, xs: 1 }}
        mb={{ md: 5, sm: 3, xs: 2 }}
      >
        <Box
          sx={{
            width: { xs: 28, sm: 32, md: 40 },
            height: { xs: 28, sm: 32, md: 40 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={onBackIconClick}
        >
          <Image
            src={MultiBackIcon}
            alt={pageTitle}
            width={40}
            height={40}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              cursor: "pointer",
              marginLeft: "-6px",
            }}
          />
        </Box>
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
      <Box mb={{ md: 4, sm: 3, xs: 2 }}>
        <CheckboxForm />
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
          {cards.map((card, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <Card
                onClick={() => onCardClick(card.route)}
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 4,
                  textAlign: "center",
                  boxShadow: "2px 2px 10px rgb(0 0 0 / 35%)",
                  p: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.2s ease-in-out",
                  cursor: card.route ? "pointer" : "default",
                  backgroundColor: cardColors[index],
                  position: "relative",
                  "&:hover": {
                    transform: card.route ? "scale(1.02)" : "none",
                    boxShadow: card.route
                      ? "2px 2px 15px rgb(0 0 0 / 45%)"
                      : "2px 2px 10px rgb(0 0 0 / 35%)",
                  },
                }}
              >
                <Chip
                  label={
                    card.data ? "Available" : "Not Available"
                  }
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    backgroundColor: "rgba(188, 61, 2, 0.5)",
                    color: "white",
                    fontSize: "0.875rem",
                    height: "32px",
                    "& .MuiChip-label": {
                      px: 1,
                    },
                    borderRadius: '0 0 0 12px'
                  }}
                />
                <br />
                {card.image && (
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={200}
                    height={200}
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                      height: "auto",
                      objectFit: "contain",
                      marginBottom: "1rem",
                    }}
                  />
                )}
                <CardContent sx={{ textAlign: "center", pt: 0 }}>
                  <Typography
                    variant="h5"
                    color="#0246BC"
                    fontSize={{
                      xs: "1rem",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                    }}
                    fontWeight={{ md: 600, xs: 500 }}
                    sx={{
                      fontFamily: "inherit",
                      textAlign: "center",
                    }}
                    textTransform={"uppercase"}
                  >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
export default CommonCardPage;
