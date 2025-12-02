import { stakingApiImg } from "@/assets";
import { CommonPage } from "@/components";
import React from "react";

const ReponsesReasonCodes = () => {
  return (
    <>
      <CommonPage
        pageTitle={`Scrypt API 1.0.0 / Staking API  / Staking API`}
        src={stakingApiImg}
        backRoute="/staking-api"
        subPageTitle="Staking API"
      ></CommonPage>
    </>
  );
};

export default ReponsesReasonCodes;
