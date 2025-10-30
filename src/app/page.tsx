"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const PremiumLandingPage = () => {
  const router = useRouter();
  const theme = useTheme();
  const smoothMouseXMotion = useMotionValue(0);
  const smoothMouseYMotion = useMotionValue(0);

  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouseX(x);
      setMouseY(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTargetX((prev) => {
        const newX = prev + (mouseX - prev) * 0.15;
        smoothMouseXMotion.set(newX);
        return newX;
      });
      setTargetY((prev) => {
        const newY = prev + (mouseY - prev) * 0.15;
        smoothMouseYMotion.set(newY);
        return newY;
      });
    }, 16);

    return () => clearInterval(interval);
  }, [mouseX, mouseY, smoothMouseXMotion, smoothMouseYMotion]);

  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  };

  const orbVariants = (duration: number, delay: number) => ({
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const, // ✅ tells TS it’s a literal easing value
      },
    },
  });

  const cardVariants = (duration: number, delay: number) => ({
    animate: {
      y: [0, -30, 0],
      rotate: [0, 5, 0],
      transition: {
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  });

  const lineVariants = (delay: number) => ({
    animate: {
      x: ["100%", "-100%"],
      opacity: [0, 0.8, 0],
      transition: {
        duration: 4,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
      },
    },
  });

  const particleVariants = (duration: number, delay: number) => ({
    animate: {
      y: ["100vh", "-100px"],
      scale: [0, 1.5],
      opacity: [0, 1, 1, 0],
      transition: {
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear" as const,
      },
    },
  });

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0118 0%, #1a0a2e 50%, #0a0118 100%)",
        position: "relative",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: { xs: "2rem", md: "4rem 6rem" },
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "4rem",
              letterSpacing: "-1px",
            }}
          >
            BRAND
          </Typography>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "2.5rem", md: "4rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            Build the{" "}
            <Box
              component="span"
              sx={{
                background:
                  "linear-gradient(135deg, #ff6b9d 0%, #ffa502 50%, #00d4ff 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Future
            </Box>
            <br />
            of Digital
            <br />
            Experiences
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Typography
            sx={{
              fontSize: "1.2rem",
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "3rem",
              lineHeight: 1.6,
              maxWidth: "500px",
            }}
          >
            Transform your creative vision into reality with powerful tools and
            stunning animations that bring your ideas to life.
          </Typography>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ y: -3 }}
        >
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
              color: "white",
              padding: "1.2rem 2.5rem",
              fontSize: "1.1rem",
              borderRadius: "12px",
              fontWeight: 600,
              boxShadow: "0 20px 60px rgba(255, 107, 157, 0.4)",
              textTransform: "none",
              width: "fit-content",
              "&:hover": {
                boxShadow: "0 25px 70px rgba(255, 107, 157, 0.6)",
                background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
              },
              "& .MuiSvgIcon-root": {
                transition: "transform 0.3s ease",
              },
              "&:hover .MuiSvgIcon-root": {
                transform: "translateX(5px)",
              },
            }}
            onClick={() => router.push("/registration-scope")}
          >
            Get Started
          </Button>
        </motion.div>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", lg: "flex" },
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          perspective: "1200px",
        }}
      >
        {/* Grid Background */}
        <motion.div
          animate={{ x: [0, 50], y: [0, 50] }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            opacity: 0.3,
          }}
        />

        {/* Orbs with smooth cursor tracking */}
        <motion.div
          variants={orbVariants(8, 0)}
          animate="animate"
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, #ff6b9d 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.8,
            top: "10%",
            right: "20%",
            x: useTransform(smoothMouseXMotion, (x) => x * 20),
            y: useTransform(smoothMouseYMotion, (y) => y * 20),
          }}
        />
        <motion.div
          variants={orbVariants(10, 2)}
          animate="animate"
          style={{
            position: "absolute",
            width: "350px",
            height: "350px",
            background: "radial-gradient(circle, #ffa502 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.8,
            bottom: "15%",
            right: "10%",
            x: useTransform(smoothMouseXMotion, (x) => x * 18),
            y: useTransform(smoothMouseYMotion, (y) => y * 18),
          }}
        />
        <motion.div
          variants={orbVariants(12, 4)}
          animate="animate"
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(60px)",
            opacity: 0.8,
            top: "50%",
            right: "40%",
            x: useTransform(smoothMouseXMotion, (x) => x * 22),
            y: useTransform(smoothMouseYMotion, (y) => y * 22),
          }}
        />

        {/* Statue with smooth cursor tracking */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{
            position: "relative",
            zIndex: 5,
            width: "300px",
            height: "400px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 30px 60px rgba(255, 107, 157, 0.4))",
            rotateY: useTransform(smoothMouseXMotion, (x) => x * 45),
            rotateX: useTransform(smoothMouseYMotion, (y) => -y * 45),
            x: useTransform(smoothMouseXMotion, (x) => x * 40),
            y: useTransform(smoothMouseYMotion, (y) => y * 40),
          }}
        >
          <svg
            viewBox="0 0 200 300"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 10px 30px rgba(0, 212, 255, 0.3))",
            }}
          >
            {/* Base */}
            <rect
              x="60"
              y="260"
              width="80"
              height="40"
              fill="url(#baseGradient)"
              rx="4"
            />

            {/* Pedestal */}
            <path
              d="M 70 260 L 80 220 L 120 220 L 130 260 Z"
              fill="url(#pedestalGradient)"
            />

            {/* Statue Body */}
            <ellipse
              cx="100"
              cy="180"
              rx="30"
              ry="40"
              fill="url(#bodyGradient)"
            />
            <ellipse
              cx="100"
              cy="170"
              rx="28"
              ry="35"
              fill="url(#bodyGradient2)"
            />

            {/* Statue Head */}
            <circle cx="100" cy="120" r="25" fill="url(#headGradient)" />
            <circle cx="100" cy="115" r="23" fill="url(#headGradient2)" />

            {/* Arms */}
            <ellipse
              cx="70"
              cy="170"
              rx="12"
              ry="30"
              fill="url(#armGradient)"
              transform="rotate(-20 70 170)"
            />
            <ellipse
              cx="130"
              cy="170"
              rx="12"
              ry="30"
              fill="url(#armGradient)"
              transform="rotate(20 130 170)"
            />

            {/* Crown/Top */}
            <path
              d="M 85 105 L 100 85 L 115 105 Z"
              fill="url(#crownGradient)"
            />
            <circle cx="100" cy="88" r="6" fill="#ffa502" />

            {/* Glow effect */}
            <circle
              cx="100"
              cy="150"
              r="80"
              fill="url(#glowGradient)"
              opacity="0.3"
            />

            {/* Gradients */}
            <defs>
              <linearGradient
                id="baseGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#4a4a6a", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#2a2a3a", stopOpacity: 1 }}
                />
              </linearGradient>

              <linearGradient
                id="pedestalGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#5a5a7a", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#3a3a5a", stopOpacity: 1 }}
                />
              </linearGradient>

              <linearGradient
                id="bodyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ff6b9d", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#c44569", stopOpacity: 0.9 }}
                />
              </linearGradient>

              <linearGradient
                id="bodyGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffa502", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff6b9d", stopOpacity: 0.8 }}
                />
              </linearGradient>

              <linearGradient
                id="headGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#00d4ff", stopOpacity: 0.8 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#0099ff", stopOpacity: 0.9 }}
                />
              </linearGradient>

              <linearGradient
                id="headGradient2"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#26de81", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#00d4ff", stopOpacity: 0.8 }}
                />
              </linearGradient>

              <linearGradient
                id="armGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffa502", stopOpacity: 0.7 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff6b9d", stopOpacity: 0.8 }}
                />
              </linearGradient>

              <linearGradient
                id="crownGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "#ffa502", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff6348", stopOpacity: 1 }}
                />
              </linearGradient>

              <radialGradient id="glowGradient">
                <stop
                  offset="0%"
                  style={{ stopColor: "#ff6b9d", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#ff6b9d", stopOpacity: 0 }}
                />
              </radialGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Floating Cards with smooth cursor tracking */}
        <motion.div
          variants={cardVariants(6, 0)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            width: "200px",
            height: "120px",
            top: "20%",
            right: "15%",
            x: useTransform(smoothMouseXMotion, (x) => x * 12),
            y: useTransform(smoothMouseYMotion, (y) => y * 12),
          }}
        />
        <motion.div
          variants={cardVariants(8, 1)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            width: "180px",
            height: "100px",
            bottom: "25%",
            right: "25%",
            x: useTransform(smoothMouseXMotion, (x) => x * 14),
            y: useTransform(smoothMouseYMotion, (y) => y * 14),
          }}
        />
        <motion.div
          variants={cardVariants(7, 2)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "2rem",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            width: "160px",
            height: "90px",
            top: "55%",
            right: "10%",
            x: useTransform(smoothMouseXMotion, (x) => x * 16),
            y: useTransform(smoothMouseYMotion, (y) => y * 16),
          }}
        />

        {/* Glowing Lines */}
        <motion.div
          variants={lineVariants(0)}
          animate="animate"
          style={{
            position: "absolute",
            height: "2px",
            width: "40%",
            background:
              "linear-gradient(90deg, transparent, #ff6b9d, transparent)",
            top: "30%",
            right: 0,
            opacity: 0.5,
          }}
        />
        <motion.div
          variants={lineVariants(1.5)}
          animate="animate"
          style={{
            position: "absolute",
            height: "2px",
            width: "50%",
            background:
              "linear-gradient(90deg, transparent, #00d4ff, transparent)",
            top: "60%",
            right: 0,
            opacity: 0.5,
          }}
        />
        <motion.div
          variants={lineVariants(3)}
          animate="animate"
          style={{
            position: "absolute",
            height: "2px",
            width: "35%",
            background:
              "linear-gradient(90deg, transparent, #ffa502, transparent)",
            top: "80%",
            right: 0,
            opacity: 0.5,
          }}
        />

        {/* Particles */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <motion.div
            key={i}
            variants={particleVariants(10 + i, i * 0.5)}
            animate="animate"
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              left: `${20 + i * 10}%`,
              bottom: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default PremiumLandingPage;
