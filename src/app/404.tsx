"use client";

import { Box, Typography, Button, Stack } from "@mui/material";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      textAlign="center"
      bgcolor="#f5f5f5"
      px={3}
    >
      <Typography
        variant="h1"
        fontSize="5rem"
        fontWeight={700}
        color="error.main"
      >
        404
      </Typography>
      <Typography variant="h5" mt={2} color="text.secondary">
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" mt={1} mb={4} color="text.secondary">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push("/")}
        >
          Go to Home
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => router.back()}
        >
          Go Back
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
