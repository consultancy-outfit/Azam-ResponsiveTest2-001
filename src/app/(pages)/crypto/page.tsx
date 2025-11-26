// "use client";
// import { MultiPathPage } from "@/components";
// import {
//   img1CryptoImage,
//   img2CryptoImage
// } from "@/assets";
// import React from "react";
// import MultiPathPageNoBackRoute from "@/components/multi-path-page-no-back-route/page";

// const CryptoPageData = [
//   {
//     key: "crypto-1",
//     link: "/crypto-exchange-fix-api",
//     icon: img1CryptoImage,
//     title: "Exchange FIX API",
//   },
//   {
//     key: "crypto-2",
//     link: "/crypto-comexchange-api-v1",
//     icon: img2CryptoImage,
//     title: "Exchange API V1",
//   }
// ];

// const CryptoPage = () => {
//   return (
//     <MultiPathPageNoBackRoute
//       arrayData={CryptoPageData}
//       pageTitle="Crypto"
//     />
//   );
// };

// export default CryptoPage;


import {
  img1CryptoImage,
  img2CryptoImage,
} from "@/assets";
import CommonCardPage from "@/components/common-card-page";
import React from "react";

const CryptoPage = () => {
  const cards = [
    {
      title: "Exchange FIX API",
      image: img1CryptoImage,
      route: "/crypto-exchange-fix-api",
      data: true,
    },
    {
      title: "Exchange API V1",
      image: img2CryptoImage,
      route: "/crypto-com-exchange-api-v1",
    },
  ];

  return (
    <CommonCardPage
      pageTitle="Crypto"
      cards={cards}
      backRoute={"/"}
    />
  );
};

export default CryptoPage;

