"use client";

import React from "react";
import CommonImgMapPage from "@/components/common-img-map-page";

import {
    cryptofixmessage,
} from "@/assets";

const CryptoFixMessagePage = () => {
  const areas = [
    { alt: "header", title: "header", href: "/fix-message", shape: "rect", coords: "17,7,659,96" },
    { alt: "trailor", title: "trailor", href: "/standard-trailer", shape: "rect", coords: "22,637,1718,922" },
    { alt: "logon", title: "logon", href: "/logon", shape: "rect", coords: "10,987,566,1070" },
    { alt: "logout", title: "logout", href: "/logout", shape: "rect", coords: "7,3760,821,3876" },
    { alt: "heartbeat", title: "heartbeat", href: "/heartbeat", shape: "rect", coords: "27,4431,1545,4677" },
    { alt: "test", title: "test", href: "/test-request", shape: "rect", coords: "2,5452,681,5539" },
    { alt: "resend", title: "resend", href: "/resend-request", shape: "rect", coords: "12,6224,700,6298" },
    { alt: "case1", title: "case1", href: "/case1", shape: "rect", coords: "84,8469,587,8668" },
    { alt: "case2", title: "case2", href: "/case2", shape: "rect", coords: "618,8466,1165,8668" },
    { alt: "case3", title: "case3", href: "/case3", shape: "rect", coords: "1200,8468,1698,8675" },
    { alt: "reset", title: "reset", href: "/sequence-reset", shape: "rect", coords: "9,8842,1314,9099" },
    { alt: "neworder", title: "neworder", href: "/new-order-single", shape: "rect", coords: "12,10554,590,10646" },
    { alt: "required", title: "required", href: "/required-fields", shape: "rect", coords: "33,10884,373,11137" },
    { alt: "parameter", title: "parameter", href: "/parameters-ordtype", shape: "rect", coords: "477,10896,1034,11130" },
    { alt: "attribute", title: "attribute", href: "/responce-attributes", shape: "rect", coords: "1152,10882,1756,11132" },
    { alt: "ordercancel", title: "ordercancel", href: "/order-cancel-request", shape: "rect", coords: "24,11209,921,11296" },
    { alt: "requirdd", title: "requirdd", href: "/required-fields", shape: "rect", coords: "34,11556,705,11793" },
    { alt: "responce", title: "responce", href: "/responseAttributes", shape: "rect", coords: "857,11563,1752,11782" },
    { alt: "ordercancel", title: "ordercancel", href: "/order-cancel-request", shape: "rect", coords: "5,11888,803,11971" },
    { alt: "orderreject", title: "orderreject", href: "/order-cancel-reject-message", shape: "rect", coords: "7,12540,674,12619" },
    { alt: "ordermassrequest", title: "ordermassrequest", href: "/order-mass-cancel-request-message", shape: "rect", coords: "5,13210,869,13317" },
    { alt: "massreport", title: "massreport", href: "/order-mass-cancel-report-message", shape: "rect", coords: "9,14197,794,14281" },
    { alt: "massorder", title: "massorder", href: "/mass-order-message", shape: "rect", coords: "3,14854,611,14928" },
    { alt: "excution", title: "excution", href: "/execution-report", shape: "rect", coords: "44,15669,881,15900" },
    { alt: "values", title: "values", href: "/exec-type-value", shape: "rect", coords: "928,15676,1732,15893" },
    { alt: "status", title: "status", href: "/order-status-request", shape: "rect", coords: "12,16018,1437,16293" },
    { alt: "res", title: "res", href: "/responce-attributes-message", shape: "rect", coords: "476,16336,874,16569" },
    { alt: "attri", title: "attri", href: "/responce-attributes", shape: "rect", coords: "51,16348,428,16579" },
    { alt: "unknow", title: "unknow", href: "/unknow-order", shape: "rect", coords: "928,16343,1756,16577" },
    { alt: "marketing", title: "marketing", href: "/market-data-request", shape: "rect", coords: "12,16677,953,16735" },
    { alt: "refresh", title: "refresh", href: "/market-data-refresh", shape: "rect", coords: "7,17125,779,17197" },
    { alt: "marketingreject", title: "marketingreject", href: "/market-data-reject", shape: "rect", coords: "27,17597,702,17662" },
    { alt: "sd", title: "sd", href: "/security-definition-request", shape: "rect", coords: "10,18249,775,18333" },
    { alt: "ssd", title: "ssd", href: "/security-defination", shape: "rect", coords: "10,18910,664,19001" },
    { alt: "snapshotrefresh", title: "snapshotrefresh", href: "/snapshot-refresh", shape: "rect", coords: "14,19612,1526,19897" },
    { alt: "slr", title: "slr", href: "/security-list-request", shape: "rect", coords: "14,20596,1722,20888" },
    { alt: "securitylist", title: "securitylist", href: "/security-list", shape: "rect", coords: "26,21292,1686,21561" },
    { alt: "business", title: "business", href: "/business-message-reject", shape: "rect", coords: "17,21971,1771,22312" },
  ];
  return (
    <CommonImgMapPage
      pageTitle="FIX Messages"
      backRoute="/crypto-exchange-fix-api"
      image={cryptofixmessage}
      areas={areas}
    />
  );
};

export default CryptoFixMessagePage;
