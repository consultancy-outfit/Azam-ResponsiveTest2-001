"use client";

import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface AreaItem {
  alt: string;
  title: string;
  href: string;
  coords: string;
  shape: string;
  type?: "link" | "audio";
  audioSrc?: string;
  target?: string;
}

interface SinglePageProps {
  image?: string;
  amendmentButtonRoute1?: string;
  amendmentButtonRoute2?: string;
  amendmentButtonRoute3?: string;
  amendmentButtonTitle1?: string;
  amendmentButtonTitle2?: string;
  amendmentButtonTitle3?: string;
  downloadUrl?: string;
  downloadFileName?: string;
  target?: string;
  areas?: AreaItem[];
}

const SingleImgMapPage: React.FC<SinglePageProps> = ({
  amendmentButtonRoute1,
  amendmentButtonRoute2,
  amendmentButtonRoute3,
  amendmentButtonTitle1,
  amendmentButtonTitle2,
  amendmentButtonTitle3,
  downloadUrl,
  downloadFileName,
  image,
  target,
  areas = [],
}) => {
  const router = useRouter();
  const mapRef = useRef<HTMLMapElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentAudioSrc, setCurrentAudioSrc] = useState<string | null>(null);

  // Resize image map
  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current) {
      import("image-map-resizer").then((mod) => mod.default());
    }
  }, [areas, image]);

  // Handle amendment buttons
  const handleButtonClick = (route?: string, isDownload = false) => {
    if (isDownload && downloadUrl && downloadFileName) {
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadFileName;
      link.click();
    } else if (route) {
      router.push(route);
    }
  };

  // Handle image map click
  const handleAreaClick = (e: React.MouseEvent, area: AreaItem) => {
    e.preventDefault();

    if (area.type === "audio" && area.audioSrc) {
      const isSameAudio = currentAudioSrc === area.audioSrc;

      if (isSameAudio && audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      } else {
        // Stop previous audio
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current = null;
        }

        const newAudio = new Audio(area.audioSrc);
        newAudio.play().catch(console.warn);

        audioRef.current = newAudio;
        setCurrentAudioSrc(area.audioSrc);
      }
    }

    if (area.type === "link") {
      if (area.target === "_blank") {
        window.open(area.href, "_blank");
      } else {
        window.location.href = area.href;
      }
    }
  };

  return (
    <Box px={{ md: 3, xs: 2 }}>
      {/* Amendment buttons */}
      <Box
        display="flex"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={{ md: "center", xs: "left" }}
        justifyContent="space-between"
        marginBottom={2}
        gap={0}
      >
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", ml: "auto" }}>
          {amendmentButtonTitle1 && (
            <Button
              variant="contained"
              onClick={() => handleButtonClick(amendmentButtonRoute1, true)}
              sx={buttonStyle}
            >
              {amendmentButtonTitle1}
            </Button>
          )}
          {amendmentButtonTitle2 && (
            <Button
              variant="contained"
              onClick={() => handleButtonClick(amendmentButtonRoute2)}
              sx={buttonStyle}
            >
              {amendmentButtonTitle2}
            </Button>
          )}
          {amendmentButtonTitle3 && (
            <Button
              variant="contained"
              onClick={() => handleButtonClick(amendmentButtonRoute3)}
              sx={buttonStyle}
            >
              {amendmentButtonTitle3}
            </Button>
          )}
        </Box>
      </Box>

      {/* Image and map */}
      {image && (
        <>
          <Image
            src={image}
            alt="crypto"
            useMap={areas.length > 0 ? "#image-map" : undefined}
            width={200}
            height={200}
            style={{ width: "100%", height: "auto" }}
            onLoadingComplete={() => {
              import("image-map-resizer").then((mod) => mod.default());
            }}
          />
          {areas.length > 0 && (
            <map name="image-map" ref={mapRef}>
              {areas.map((area, index) => (
                <area
                  key={index}
                  alt={area.alt}
                  title={area.title}
                  coords={area.coords}
                  shape={area.shape}
                  href={area.type === "link" ? area.href : "#"}
                  target={area.target || "_self"}
                  onClick={(e) => handleAreaClick(e, area)}
                />
              ))}
            </map>
          )}
        </>
      )}
    </Box>
  );
};

// Reusable button styling
const buttonStyle = {
  backgroundColor: "#5A5867",
  color: "#FFFFFF",
  "&:hover": { backgroundColor: "#4A4857" },
  cursor: "pointer",
  fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" },
  padding: { xs: "6px 12px", md: "8px 16px" },
  textTransform: "capitalize",
  fontFamily: "Outfit, inherit",
};

export default SingleImgMapPage
