// "use client";
// import { MultiPathPage } from "@/components";
// import { img3CryptoImage, img4CryptoImage } from "@/assets";
// import React from "react";
// import MultiPathPageNoBackRoute from "@/components/multi-path-page-no-back-route/page";

// const CryptoPageData = [
//   {
//     key: "crypto-1",
//     link: "",
//     icon: img3CryptoImage,
//     title: "Overview",
//   },
//   {
//     key: "crypto-2",
//     link: "",
//     icon: img4CryptoImage,
//     title: "FIX Messages",
//   },
// ];

// const CryptoPage1 = () => {
//   return (
//     <MultiPathPageNoBackRoute
//       arrayData={CryptoPageData}
//       pageTitle="Crypto.com Exchange FIX API"
//     />
//   );
// };

// export default CryptoPage1;


import {
    img1CryptoImage,
    img2CryptoImage,
    img3CryptoImage,
    img4CryptoImage,
  } from "@/assets";
  import CommonCardPage from "@/components/common-card-page";
  import React from "react";
  
  const CryptoPage = () => {
    const cards = [
      {
        title: "Overview",
        image: img3CryptoImage,
        route: "/",
        data: true,
      },
      {
        title: "FIX Messages",
        image: img4CryptoImage,
        route: "/",
      },
    ];
  
    return (
      <CommonCardPage
        pageTitle="Crypto.com Exchange FIX API"
        cards={cards}
      />
    );
  };
  
  export default CryptoPage;