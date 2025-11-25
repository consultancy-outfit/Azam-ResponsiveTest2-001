// import {
//   privateGetOrderHistoryRequest,
//   privateGetOrderHistoryResponse,
// } from "@/assets";
// import { Box } from "@mui/material";
// import Image from "next/image";
// import React from "react";

// const page = () => {
//   return (
//     <Box>

//       <Image
//         src={privateGetOrderHistoryRequest}
//         alt="Comprehensive System Map"
//         style={{ width: "100%", height: "auto" }}
//       />
//       <Image
//         src={privateGetOrderHistoryResponse}
//         alt="Comprehensive System Map"
//         style={{ width: "100%", height: "auto" }}
//       />
//     </Box>
//   );
// };

// export default page;

import {
  privateGetOrderHistoryRequest,
  privateGetOrderHistoryResponse,
} from "@/assets";
import { CommonPage } from "@/components";
import Image from "next/image";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <>
      <CommonPage
        pageTitle={`Scrypt API 1.0.0/ Order Trade Transaction History Api/ Private Get Order History`}
        src={privateGetOrderHistoryRequest}
        backRoute="/order-trade-transaction-history-api"
        subPageTitle="Account Balance and Position API "
      ></CommonPage>
      <Image
        src={privateGetOrderHistoryResponse}
        alt="Comprehensive System Map"
        style={{ width: "100%", height: "auto" }}
      />
    </>
  );
};

export default ReponsesReasonCodes;
