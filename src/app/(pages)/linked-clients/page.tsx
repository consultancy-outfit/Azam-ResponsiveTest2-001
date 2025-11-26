"use client";
import { useState, useEffect, useCallback } from "react";
import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckboxForm } from "@/components/checkbox-form";
import { LinkedClientsImages } from "@/assets";
import { CommonBackIcon } from "@/assets/common-assets";

const LinkedClientsPage = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = useState(0);
  const [hoveredArea, setHoveredArea] = useState(null);

  // Areas data extracted from your SVG
  const areas = [
    {
      id: "scrypt-api-page1",
      x: 36,
      y: 10,
      width: 400,
      height: 15,

      link: "/the-linked-client-object",
    },
    {
      id: "scrypt-api-page2",
      x: 38,
      y: 500,
      width: 400,
      height: 15,

      link: "/create-individual-linked-client",
    },
    {
      id: "scrypt-api-page3",
      x: 38,
      y: 1710,
      width: 400,
      height: 15,
      link: "/create-business-linked-client",
    },
    {
      id: "scrypt-api-page4",
      x: 38,
      y: 2425,
      width: 300,
      height: 15,

      link: "/get-linked-client",
    },
    {
      id: "listClient",
      x: 38,
      y: 3280,
      width: 300,
      height: 15,
      link: "/list-linked-clients",
    },
    {
      id: "updateClient",
      x: 38,
      y: 4410,
      width: 500,
      height: 15,
      link: "/update-individual-linked-client",
    },
      {
      id: "updateBusinessClient",
      x: 38,
      y: 5470,
      width: 500,
      height: 15,
      link: "/update-business-linked-client",
    },
       {
      id: "listLinkedClientAccounts",
      x: 38,
      y: 6180,
      width: 400,
      height: 15,
      link: "/list-linked-client-accounts",
    },
        {
      id: "listLinkedClientTransactions",
      x: 38,
      y: 7100,
      width: 400,
      height: 15,
      link: "/list-linked-client-transactions",
    },
       {
      id: "List Linked Client Pay-in Review Transactions",
      x: 38,
      y: 8515,
      width: 500,
      height: 15,
      link: "/list-linked-client-pay-in-review-transactions",
    },
  ];

  useEffect(() => {
    // Set initial container width and handle resizing
    const updateSize = () => {
      const container = document.getElementById("image-map-container");
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleAreaClick = (area: any) => {
    // Navigate to the page directly
    router.push(area.link);
  };

  // Calculate positions and sizes based on container width
  const calculateStyle = (area: any) => {
    if (containerWidth === 0) return {};

    const scaleFactor = containerWidth / 1884;

    return {
      position: "absolute",
      left: `${(area.x / 1840) * 100}%`,
      top: `${(area.y / 9600) * 100}%`,
      width: `${(area.width / 1384) * 100}%`,
      height: `${(area.height / 6080) * 100}%`,
      //  backgroundColor: "rgba(0, 0, 0, 0.2)",
      //  border: "2px solid black",
      cursor: "pointer",
      transition: "all 0.2s ease",
    };
  };

  const onBackIconClick = useCallback(() => {
    router.push("/open-payd");
  }, [router]);

  const onChange = () => { };

  return (
    <Box m={2}>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        my={3}
        gap={{ xs: 2, md: 0 }}
      >
        <Box
          display="flex"
          alignItems="center"
          flexWrap="wrap"
          flexGrow={1}
          mx={2}
        >
          <Image
            src={CommonBackIcon}
            alt={""}
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
            {"Linked Clients"}
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

      <Paper
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
        }}
        id="image-map-container"
      >
        {/* Background Image */}
        <Box sx={{ position: "relative", width: "100%", height: "auto" }}>
          <Image
            src={LinkedClientsImages}
            alt="Category Codes Summary Image"
            width={1884}
            height={2780}
            layout="responsive"
            priority
          />
        </Box>

        {/* Interactive Areas */}
        {areas.map((area: any) => (
          <Box
            key={area.id}
            sx={calculateStyle(area)}
            onClick={() => handleAreaClick(area)}
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
            title={area.title}
            // border={"1px solid red"}
          />
        ))}
      </Paper>
    </Box>
  );
};

export default LinkedClientsPage;

