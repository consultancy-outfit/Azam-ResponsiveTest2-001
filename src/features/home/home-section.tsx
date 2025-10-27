"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { colorLegends, appLogo } from "@/assets/common-assets";

const PlayCircleRoundedSVG = `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>`;
const StopCircleRoundedSVG = `<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-4 14V8h8v8H8z"/>`;
const NotesRoundedSVG = `<path d="M4 14h6v-2H4v2zm0-5h9V7H4v2zm0 10h9v-2H4v2zm13-1l-4 4V8l4 4h-3l3 3V9l-3-3h3l-3-3h3l3 3V6.5l3-3.5L22 4.5V20l-3 3-3-3h3zm-4 4z"/>`;

const audioHotspots = [
  {
    id: "applicantAccessPortal",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Applicant-Accesses-FCA-Connect-Portal.mp4",
    x: 1288.0,
    y: 936.73,
    width: 179.54,
    height: 163.92,
    title: "Applicant Access FCA Connect Portal Audio",
  },
  {
    id: "startApplication",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Start-an-Application.mp4",
    x: 1194.33,
    y: 1202.14,
    width: 163.92,
    height: 132.7,
    title: "Start an application Audio",
  },
  {
    id: "completeApplication",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Complete-the-application-with-contact-details-fee-payment-declaration-and-upload-required-documents.mp4",
    x: 1218.05,
    y: 1952.47,
    width: 125.38,
    height: 134.34,
    title: "Complete the Application Audio",
  },
  {
    id: "checkCompleteness",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Check-for-completeness.mp4",
    x: 2435.5,
    y: 2443.31,
    width: 140.5,
    height: 124.89,
    title: "Check the completeness",
  },
  {
    id: "completenessCheckResult",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Completeness-Check-Result.mp4",
    x: 3583.0,
    y: 2724.33,
    width: 140.5,
    height: 124.89,
    title: "Completeness Check Result",
  },
  {
    id: "requestFurtherInformation",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Request-further-information.mp4",
    x: 1288.0,
    y: 3122.44,
    width: 132.7,
    height: 117.09,
    title: "Request Further Information",
  },
  {
    id: "provideAdditionalData",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Provide-additional-data.mp4",
    x: 1225.55,
    y: 3348.81,
    width: 140.5,
    height: 117.09,
    title: "Provide Additional Data",
  },
  {
    id: "revalidateProvidedData",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Revalidate-provided-data.mp4",
    x: 2443.31,
    y: 3450.29,
    width: 101.47,
    height: 132.7,
    title: "Revalidate Provided Data",
  },
  {
    id: "fitnessAndProprietyAssessment",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Fitness-and-Propriety-Assessment.mp4",
    x: 3684.48,
    y: 4066.98,
    width: 140.5,
    height: 140.5,
    title: "Fitness & Properiert Assessment",
  },
  {
    id: "assessmentResult",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Assessment-Result.mp4",
    x: 3504.94,
    y: 4379.22,
    width: 148.31,
    height: 124.89,
    title: "Assessment Results",
  },
  {
    id: "decisionApproveReject",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/Decision-Approve-Reject.mp4",
    x: 1241.17,
    y: 4566.57,
    width: 179.54,
    height: 124.89,
    title: "Decision Approve & Reject",
  },
  {
    id: "ifApprovedRegisterFirmAndPublish",
    audioSrc:
      "https://orcalo.blob.core.windows.net/locofy/FCA/If-Approved-Register-firm-&-publish.mp4",
    x: 2458.92,
    y: 4871.01,
    width: 124.89,
    height: 148.31,
    title: "If Approved Register firm & publish",
  },
];

const internalLinks = [
  {
    href: "/pisp-api",
    x: 366.88,
    y: 1592.44,
    width: 1085.04,
    height: 288.82,
    title: "Complete the Application",
  },
  {
    href: "/pisp_spi",
    x: 850.86,
    y: 1896.88,
    width: 187.34,
    height: 70.25,
    title: "SPI",
  },
  {
    href: "/raisp",
    x: 819.64,
    y: 1998.36,
    width: 234.18,
    height: 54.64,
    title: "RAISP",
  },
  {
    href: "/fca-application-e-money-new-authorisation-registration-aemi",
    x: 835.25,
    y: 2084.23,
    width: 195.15,
    height: 70.25,
    title: "AEMI",
  },
  {
    href: "/semi",
    x: 850.86,
    y: 2193.51,
    width: 171.73,
    height: 78.06,
    title: "SEMI",
  },
  {
    href: "/fca-application",
    x: 6401.0,
    y: 335.66,
    width: 960.15,
    height: 171.73,
    title: "FCA Application Process",
  },
  {
    href: "/payment-services-and-electronic-money-our-approach",
    x: 6393.2,
    y: 530.81,
    width: 944.53,
    height: 132.7,
    title: "Payment Services & E-Money",
  },
  {
    href: "https://connect.fca.org.uk/portal/s/",
    x: 538.62,
    y: 944.53,
    width: 686.93,
    height: 179.54,
    title: "Applicant Access FCA Connect Portal",
    target: "_blank",
  },
  {
    href: "https://connect.fca.org.uk/firms/aupo_applicationselection",
    x: 468.36,
    y: 1225.55,
    width: 569.84,
    height: 101.47,
    title: "Start an application",
    target: "_blank",
  },
];

const renderSvgIcon = (path: string, color: string) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill={color}>
    <g dangerouslySetInnerHTML={{ __html: path }} />
  </svg>
);

export const HomeSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const legendRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const preloadedAudiosRef = useRef<{ [id: string]: HTMLAudioElement }>({});
  useEffect(() => {
    audioHotspots.forEach((hotspot) => {
      const audio = new Audio(hotspot.audioSrc);
      audio.preload = "auto";
      preloadedAudiosRef.current[hotspot.id] = audio;
    });

    return () => {
      // Cleanup
      Object.values(preloadedAudiosRef.current).forEach((audio) => {
        audio.pause();
        audio.src = "";
      });
    };
  }, []);

  const toggleDropdown = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        legendRef.current &&
        !legendRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handlePlayAudio = useCallback(
    (src: string, id: string) => {
      const existingAudio = preloadedAudiosRef.current[id];

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }

      if (playingAudioId === id) {
        setPlayingAudioId(null);
        audioRef.current = null;
      } else if (existingAudio) {
        audioRef.current = existingAudio;
        existingAudio.currentTime = 0;
        existingAudio.play();
        setPlayingAudioId(id);
        existingAudio.onended = () => {
          setPlayingAudioId(null);
          audioRef.current = null;
        };
      } else {
        // fallback
        const fallback = new Audio(src);
        audioRef.current = fallback;
        fallback.play();
        setPlayingAudioId(id);
        fallback.onended = () => {
          setPlayingAudioId(null);
          audioRef.current = null;
        };
      }
    },
    [playingAudioId],
  );

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <Box sx={{ p: 3, position: "relative" }}>
      <Stack flexDirection="row" alignItems="center" mt={{ md: 2, xs: 1 }}>
        <img src={appLogo.src} alt="FCA Logo" width={98} height={31} />
        <Typography
          variant="h5"
          color="#5A5867"
          fontSize={{ xs: "0.8rem", sm: "18px", md: "22px" }}
          fontWeight={{ md: 600, xs: 500 }}
          ml={{ md: 2, xs: 1 }}
        >
          FCA Application Process
        </Typography>
      </Stack>

      <Stack flexDirection="row" justifyContent="space-between" mt={2}>
        <Typography
          variant="h3"
          color="#5A5867"
          fontSize={{ xs: "1rem", sm: "1.5rem", md: "2rem" }}
          fontWeight={600}
          ml={2}
        >
          Sequence Diagram
        </Typography>

        <Typography
          variant="h3"
          fontWeight={600}
          ml={2}
          display="flex"
          alignItems="center"
        >
          <Typography
            component="span"
            fontSize={{ xs: "1rem", sm: "1.2rem", md: "1.8rem" }}
            fontWeight={600}
            color="#5A5867"
            sx={{ mr: 1 }}
          >
            Colour Legend
          </Typography>
          <span ref={iconRef}>
            <KeyboardArrowDownIcon
              onClick={toggleDropdown}
              sx={{
                fontSize: { xs: 28, md: 30 },
                color: "#5A5867",
                border: "2px solid",
                borderRadius: "40px",
                cursor: "pointer",
              }}
            />
          </span>
        </Typography>
      </Stack>

      <svg
        viewBox="0 0 7440 6020"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ width: "100%" }}
      >
        <style>{`
          .image-mapper-shape { fill: rgba(0, 0, 0, 0); }
          g:hover .image-mapper-shape { stroke: white; stroke-width: 2px; opacity: 20%; }
        `}</style>
        <image xlinkHref="/Request Section hdn (2).png" width="7440" />
        {internalLinks.map((link, idx) => (
          <g
            key={`link-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              if (link.href.startsWith("http")) {
                window.open(link.href, link.target || "_blank");
              } else {
                window.location.href = link.href;
              }
            }}
            style={{ cursor: "pointer" }}
          >
            <rect
              x={link.x}
              y={link.y}
              width={link.width}
              height={link.height}
              fill="rgba(0,0,0,0)"
            />
            <title>{link.title}</title>
          </g>
        ))}

        {audioHotspots.map((hotspot) => {
          const iconSize = 24;
          const x = hotspot.x + hotspot.width / 2 - iconSize / 2;
          const y = hotspot.y + hotspot.height / 2 - iconSize / 2;

          let icon = PlayCircleRoundedSVG;
          let color = "#000";

          if (playingAudioId === hotspot.id) {
            icon = StopCircleRoundedSVG;
            color = "#FF0000";
          } else if (playingAudioId !== null) {
            icon = NotesRoundedSVG;
            color = "#808080";
          }

          return (
            <g
              key={hotspot.id}
              onClick={(e) => {
                e.stopPropagation();
                handlePlayAudio(hotspot.audioSrc, hotspot.id);
              }}
              style={{ cursor: "pointer" }}
            >
              <rect
                x={hotspot.x}
                y={hotspot.y}
                width={hotspot.width}
                height={hotspot.height}
                className="image-mapper-shape audio-hotspot"
              />
              <foreignObject x={x} y={y} width={iconSize} height={iconSize}>
                {renderSvgIcon(icon, color)}
              </foreignObject>
            </g>
          );
        })}
      </svg>

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
