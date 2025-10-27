"use client";
export const DOMAIN =
  typeof window !== "undefined" ? window.location.origin : "";
export const FRONTEND_SALE_SITE_BASE_URL =
  process?.env?.NEXT_PUBLIC_FRONTEND_SALE_SITE_BASE_URL ?? DOMAIN;