"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

const DragonLandingPage: React.FC = () => {
  const router = useRouter();
  // target (raw) normalized mouse position (-1..1)
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  // motion values that framer will read
  const smoothX = useMotionValue(0);
  const smoothY = useMotionValue(0);

  // extra UI state
  const [showFireBreath, setShowFireBreath] = useState(false);

  // velocity detection for fire-breath
  const lastMoveTimeRef = useRef<number | null>(null);
  const lastPosRef = useRef({ x: 0, y: 0 });

  // LERP helper
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  // Mouse capture
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      const now = performance.now();

      // velocity calc
      const last = lastPosRef.current;
      const lastTime = lastMoveTimeRef.current;
      if (lastTime !== null) {
        const dt = Math.max(1, now - lastTime);
        const dx = x - last.x;
        const dy = y - last.y;
        const speed = Math.sqrt(dx * dx + dy * dy) / dt; // normalized speed per ms

        // threshold tuned experimentally — quick flick triggers breath
        if (speed > 0.008) {
          // minor debounce: only trigger when not already showing
          if (!showFireBreath) {
            setShowFireBreath(true);
            window.setTimeout(() => setShowFireBreath(false), 900);
          }
        }
      }

      lastPosRef.current = { x, y };
      lastMoveTimeRef.current = now;

      targetXRef.current = x;
      targetYRef.current = y;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [showFireBreath]);

  // Smooth animation loop
  useEffect(() => {
    let raf = 0;

    // different smoothing for x / y to reduce vertical jerk
    const smoothFactorX = 0.08; // higher = snappier horizontally
    const smoothFactorY = 0.06; // lower = smoother vertically

    const animate = () => {
      // tiny damping to avoid NaN
      const currX = smoothX.get();
      const currY = smoothY.get();

      const tx = targetXRef.current;
      const ty = targetYRef.current;

      smoothX.set(lerp(currX, tx, smoothFactorX));
      smoothY.set(lerp(currY, ty, smoothFactorY));

      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [smoothX, smoothY]);

  // Variants & helpers
  const floatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
    },
  };

  const orbVariants = (duration: number, delay: number) => ({
    animate: {
      x: [0, 40, -30, 0],
      y: [0, -40, 30, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut" as const,
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
        repeat: Infinity,
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
        repeat: Infinity,
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
        repeat: Infinity,
        ease: "linear" as const,
      },
    },
  });

  const fireBreathVariants = {
    hidden: { opacity: 0, scale: 1, x: 0 },
    visible: {
      opacity: [0, 1, 1, 0],
      scale: [1, 1.35],
      x: [0, 28],
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  // Derived transforms for rotation, translation
  const dragonHeadRotateZ = useTransform(smoothX, (x) => x * 20);
  const dragonHeadRotateX = useTransform(smoothY, (y) => -y * 18);

  // Subtle global parallax for planets/cards
  const parallaxXSmall = useTransform(smoothX, (x) => x * 12);
  const parallaxYSmall = useTransform(smoothY, (y) => y * 12);
  const parallaxXMed = useTransform(smoothX, (x) => x * 16);
  const parallaxYMed = useTransform(smoothY, (y) => y * 16);
  const parallaxXLarge = useTransform(smoothX, (x) => x * 22);
  const parallaxYLarge = useTransform(smoothY, (y) => y * 22);

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
          padding: { xs: "2rem", md: "4rem 12rem" },
          position: "relative",
          zIndex: 20,
        }}
      >
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
            Services{" "}
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
              Overview
            </Box>
          </Typography>
        </motion.div>

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
            Discover how these services breakdown operates with a detailed
            breakdown, visual workflow diagrams, and process insights. Explore
            how each component connects to deliver streamlined, efficient, and
            high-quality outcomes.
          </Typography>
        </motion.div>

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
              "&:hover": {
                boxShadow: "0 25px 70px rgba(255, 107, 157, 0.6)",
              },
              "& .MuiSvgIcon-root": { transition: "transform 0.3s ease" },
              "&:hover .MuiSvgIcon-root": { transform: "translateX(5px)" },
            }}
            onClick={() => {
              router.push("/registration-scope");
            }}
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
          pr: "200px",
        }}
      >
        {/* Grid Background */}
        <motion.div
          animate={{ x: [0, 50], y: [0, 50] }}
          transition={{
            duration: 20,
            repeat: Infinity,
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
            opacity: 0.28,
            zIndex: 0,
          }}
        />

        {/* Orbs (Planets) */}
        <motion.div
          variants={orbVariants(8, 0)}
          animate="animate"
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            background: "radial-gradient(circle, #ff6b9d 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(64px)",
            opacity: 0.9,
            top: "8%",
            right: "20%",
            x: parallaxXLarge,
            y: parallaxYLarge,
            zIndex: 1,
          }}
        />
        <motion.div
          variants={orbVariants(10, 2)}
          animate="animate"
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, #ffa502 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(56px)",
            opacity: 0.8,
            bottom: "15%",
            right: "10%",
            x: parallaxXMed,
            y: parallaxYMed,
            zIndex: 1,
          }}
        />
        <motion.div
          variants={orbVariants(12, 4)}
          animate="animate"
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(56px)",
            opacity: 0.85,
            top: "50%",
            right: "40%",
            x: parallaxXLarge,
            y: parallaxYLarge,
            zIndex: 1,
          }}
        />

        {/* Dragon with smooth cursor tracking and head rotation */}
        <motion.div
          variants={floatVariants}
          animate="animate"
          style={{
            position: "relative",
            zIndex: 5,
            width: "380px",
            height: "480px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 30px 60px rgba(139,92,246,0.18))",
            rotateY: useTransform(smoothX, (x) => x * 16),
            rotateX: useTransform(smoothY, (y) => -y * 10),
            x: useTransform(smoothX, (x) => x * 18),
            y: useTransform(smoothY, (y) => y * 12),
          }}
        >
          <svg
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "100%",
              height: "100%",
              filter: "drop-shadow(0 10px 30px rgba(139, 92, 246, 0.3))",
            }}
          >
            {/* Dragon Body - Pixel Style (same as your original) */}
            <g className="dragon-body">
              {/* Tail */}
              <rect x="50" y="350" width="20" height="20" fill="#8b5cf6" />
              <rect x="70" y="340" width="20" height="20" fill="#8b5cf6" />
              <rect x="90" y="330" width="20" height="20" fill="#a78bfa" />
              <rect x="110" y="320" width="20" height="20" fill="#a78bfa" />
              <rect x="130" y="310" width="20" height="20" fill="#8b5cf6" />

              {/* Tail Spikes */}
              <rect x="60" y="330" width="10" height="10" fill="#ff6b9d" />
              <rect x="100" y="315" width="10" height="10" fill="#ff6b9d" />

              {/* Lower Body */}
              <rect x="150" y="300" width="20" height="20" fill="#6366f1" />
              <rect x="170" y="300" width="20" height="20" fill="#6366f1" />
              <rect x="190" y="300" width="20" height="20" fill="#6366f1" />
              <rect x="210" y="300" width="20" height="20" fill="#6366f1" />

              <rect x="150" y="280" width="20" height="20" fill="#8b5cf6" />
              <rect x="170" y="280" width="20" height="20" fill="#a78bfa" />
              <rect x="190" y="280" width="20" height="20" fill="#a78bfa" />
              <rect x="210" y="280" width="20" height="20" fill="#8b5cf6" />

              {/* Middle Body */}
              <rect x="160" y="260" width="20" height="20" fill="#8b5cf6" />
              <rect x="180" y="260" width="20" height="20" fill="#a78bfa" />
              <rect x="200" y="260" width="20" height="20" fill="#8b5cf6" />

              {/* Back Spikes */}
              <rect x="170" y="240" width="10" height="10" fill="#ff6b9d" />
              <rect x="190" y="240" width="10" height="10" fill="#ffa502" />
              <rect x="210" y="250" width="10" height="10" fill="#ff6b9d" />

              {/* Legs */}
              <rect x="160" y="320" width="15" height="20" fill="#6366f1" />
              <rect x="160" y="340" width="20" height="15" fill="#4f46e5" />

              <rect x="205" y="320" width="15" height="20" fill="#6366f1" />
              <rect x="200" y="340" width="20" height="15" fill="#4f46e5" />
            </g>

            {/* Dragon Neck and Head - Smooth cursor rotation (motion.g) */}
            <motion.g
              className="dragon-head"
              style={{
                transformOrigin: "200px 260px",
                rotateZ: dragonHeadRotateZ,
                rotateX: dragonHeadRotateX,
              }}
            >
              {/* Neck */}
              <rect x="190" y="220" width="20" height="20" fill="#8b5cf6" />
              <rect x="190" y="200" width="20" height="20" fill="#a78bfa" />
              <rect x="190" y="180" width="20" height="20" fill="#8b5cf6" />
              <rect x="190" y="160" width="20" height="20" fill="#a78bfa" />

              {/* Head Base */}
              <rect x="170" y="140" width="20" height="20" fill="#8b5cf6" />
              <rect x="190" y="140" width="20" height="20" fill="#a78bfa" />
              <rect x="210" y="140" width="20" height="20" fill="#8b5cf6" />

              <rect x="170" y="120" width="20" height="20" fill="#a78bfa" />
              <rect x="190" y="120" width="20" height="20" fill="#c4b5fd" />
              <rect x="210" y="120" width="20" height="20" fill="#a78bfa" />

              {/* Head Top */}
              <rect x="180" y="100" width="20" height="20" fill="#8b5cf6" />
              <rect x="200" y="100" width="20" height="20" fill="#8b5cf6" />

              {/* Horns */}
              <rect x="170" y="90" width="10" height="10" fill="#ffa502" />
              <rect x="165" y="80" width="10" height="10" fill="#ff6348" />
              <rect x="220" y="90" width="10" height="10" fill="#ffa502" />
              <rect x="225" y="80" width="10" height="10" fill="#ff6348" />

              {/* Eyes */}
              <rect x="175" y="125" width="10" height="10" fill="#ff6b9d" />
              <rect x="178" y="128" width="4" height="4" fill="#ffffff" />

              <rect x="215" y="125" width="10" height="10" fill="#ff6b9d" />
              <rect x="218" y="128" width="4" height="4" fill="#ffffff" />

              {/* Snout */}
              <rect x="230" y="130" width="20" height="15" fill="#a78bfa" />
              <rect x="250" y="135" width="15" height="10" fill="#8b5cf6" />

              {/* Nostril */}
              <rect x="255" y="138" width="5" height="5" fill="#4f46e5" />
            </motion.g>

            {/* Fire Breath Effect */}
            {showFireBreath && (
              <motion.div
                variants={fireBreathVariants}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  top: "48%", // adjust to match dragon’s mouth
                  left: "90%",
                  width: "140px",
                  height: "12px",
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.9), rgba(255,120,0,0.8), rgba(255,0,0,0))",
                  borderRadius: "12px",
                  filter: "blur(2px) drop-shadow(0 0 10px rgba(255,120,0,0.8))",
                  transformOrigin: "left center",
                  zIndex: 6,
                }}
              />
            )}
            <motion.g
              className="fire-breath"
              variants={fireBreathVariants}
              initial="hidden"
              animate={showFireBreath ? "visible" : "hidden"}
              style={{ transformOrigin: "270px 140px" }}
            >
              {/* Flame pixels */}
              <rect x="265" y="140" width="15" height="15" fill="#ff6348" />
              <rect x="280" y="135" width="15" height="15" fill="#ffa502" />
              <rect x="295" y="130" width="15" height="15" fill="#ff6348" />
              <rect x="310" y="138" width="15" height="15" fill="#ffa502" />
              <rect x="325" y="133" width="15" height="15" fill="#ff6348" />

              <rect x="275" y="150" width="12" height="12" fill="#ffa502" />
              <rect x="290" y="148" width="12" height="12" fill="#ff6348" />
              <rect x="305" y="152" width="12" height="12" fill="#ffa502" />
              <rect x="320" y="148" width="12" height="12" fill="#ffed4e" />

              <rect x="285" y="125" width="12" height="12" fill="#ffa502" />
              <rect x="300" y="120" width="12" height="12" fill="#ffed4e" />
              <rect x="315" y="123" width="12" height="12" fill="#ff6348" />
            </motion.g>

            {/* Glow effect */}
            <circle
              cx="200"
              cy="220"
              r="150"
              fill="url(#dragonGlowGradient)"
              opacity="0.18"
            />
            <defs>
              <radialGradient id="dragonGlowGradient">
                <stop
                  offset="0%"
                  style={{ stopColor: "#8b5cf6", stopOpacity: 0.6 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#8b5cf6", stopOpacity: 0 }}
                />
              </radialGradient>
            </defs>
          </svg>

          {/* Small orbiting planets/pucks */}
          <motion.div
            animate={{ x: [0, 18, -18, 0], y: [0, -18, 18, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{
              position: "absolute",
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #00d4ff 0%, #0099ff 100%)",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)",
              top: "10%",
              left: "15%",
              zIndex: 6,
              x: parallaxXSmall,
              y: parallaxYSmall,
            }}
          />
          <motion.div
            animate={{ x: [0, -24, 24, 0], y: [0, 24, -24, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              background: "linear-gradient(135deg, #26de81 0%, #20bf6b 100%)",
              borderRadius: "50%",
              boxShadow: "0 0 25px rgba(38, 222, 129, 0.45)",
              top: "15%",
              right: "10%",
              zIndex: 6,
              x: parallaxXMed,
              y: parallaxYMed,
            }}
          />
          <motion.div
            animate={{ x: [0, 22, -22, 0], y: [0, 22, -22, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay: 2 }}
            style={{
              position: "absolute",
              width: "35px",
              height: "35px",
              background: "linear-gradient(135deg, #ffa502 0%, #ff6348 100%)",
              borderRadius: "50%",
              boxShadow: "0 0 20px rgba(255,165,2,0.45)",
              bottom: "15%",
              left: "10%",
              zIndex: 6,
              x: parallaxXSmall,
              y: parallaxYSmall,
            }}
          />
          <motion.div
            animate={{ x: [0, -20, 20, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
            style={{
              position: "absolute",
              width: "30px",
              height: "30px",
              background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
              borderRadius: "50%",
              boxShadow: "0 0 15px rgba(255,107,157,0.45)",
              bottom: "30%",
              right: "15%",
              zIndex: 6,
              x: parallaxXSmall,
              y: parallaxYSmall,
            }}
          />
        </motion.div>

        {/* Floating Cards */}
        <motion.div
          variants={cardVariants(6, 0)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            padding: "1.6rem",
            width: "210px",
            height: "120px",
            top: "20%",
            right: "15%",
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            x: parallaxXMed,
            y: parallaxYMed,
            zIndex: 7,
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 700, mb: 0.5 }}>
            Workflow
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
            Visual diagrams & steps
          </Typography>
        </motion.div>
        <motion.div
          variants={cardVariants(8, 1)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "16px",
            padding: "1.4rem",
            width: "180px",
            height: "100px",
            bottom: "25%",
            right: "25%",
            boxShadow: "0 18px 40px rgba(0,0,0,0.32)",
            x: parallaxXLarge,
            y: parallaxYLarge,
            zIndex: 7,
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 700, mb: 0.5 }}>
            Integrations
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
            APIs & connectors
          </Typography>
        </motion.div>
        <motion.div
          variants={cardVariants(7, 2)}
          animate="animate"
          style={{
            position: "absolute",
            background: "rgba(255, 255, 255, 0.045)",
            backdropFilter: "blur(9px)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "16px",
            padding: "1.2rem",
            width: "160px",
            height: "90px",
            top: "55%",
            right: "10%",
            boxShadow: "0 16px 34px rgba(0,0,0,0.30)",
            x: parallaxXSmall,
            y: parallaxYSmall,
            zIndex: 7,
          }}
        >
          <Typography sx={{ color: "#fff", fontWeight: 700, mb: 0.5 }}>
            Performance
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: 13 }}>
            Metrics & SLAs
          </Typography>
        </motion.div>

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
            zIndex: 3,
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
            zIndex: 3,
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
            zIndex: 3,
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
              background: "rgba(255, 255, 255, 0.6)",
              borderRadius: "50%",
              left: `${12 + i * 9}%`,
              bottom: 0,
              zIndex: 2,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DragonLandingPage;
