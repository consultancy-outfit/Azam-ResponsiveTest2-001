import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f0f4f8",
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
            sx={{ color: "#003366" }}
          >
            Welcome to the starter template Locofy
          </Typography>
          <Typography variant="h6" sx={{ color: "#555" }}>
            Your trusted platform for care service oversight and reporting.
          </Typography>
        </Container>
      </Box>
    </>
  );
}
