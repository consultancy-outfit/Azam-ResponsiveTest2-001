"use client";
import { Box, Typography, Container, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#022728",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "#fff",
              fontWeight: 400,
              fontFamily: "inherit",
              fontSize: { xs: "2.2rem", sm: "2.7rem", md: "3rem" },
              lineHeight: 1.15,
              display: "block",
            }}
          >
            Welc
            <span
              style={{
                color: "#E7C447",
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              ome
            </span>
            &nbsp;On
            <span
              style={{
                color: "#E7C447",
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              board
            </span>
          </Typography>
          <Typography variant="h6" sx={{ color: "#fff" }}>
            This portal gives you direct access to live diagrams, workflows, and
            real-time updates. <br /> Login to validate changes, collaborate
            with teams, and stay in sync with every milestone
          </Typography>
          <br />
          <Button
            sx={{
              backgroundColor: "#E7C447",
              color: "#232323",
              boxShadow: "2px 4px 0px 0px #ffffff",
              border: 1,
              borderRadius: "4px",
              minWidth: "180px",
              minHeight: "48px",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              letterSpacing: 0,
              boxSizing: "border-box",
              padding: "12px 0",
              justifyContent: "center",
              alignItems: "center",
              display: "inline-flex",
              cursor: "pointer",
              transition: "transform 0.03s",
              "&:hover": {
                backgroundColor: "#dec041",
                boxShadow: "1px 2px 0px 0px #ffffff",
                transform: "translateY(1px)",
              },
            }}
            variant="contained"
            endIcon={
              <span
                style={{
                  display: "inline-block",
                  fontWeight: 700,
                  marginLeft: "3px",
                  fontSize: "1.1em",
                  verticalAlign: "middle",
                  lineHeight: 1,
                }}
              >
                &gt;
              </span>
            }
            onClick={() => router.push("/registration-scope")}
          >
            Hire Me
          </Button>
        </Container>
      </Box>
    </>
  );
}
