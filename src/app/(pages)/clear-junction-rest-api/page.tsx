import { IntroductionImage, ReferenceImage } from '@/assets';
import CommonCardPage from '@/components/common-card-page';
import React from 'react';

const ClearJunctionRestApiPage = () => {
  const cards = [
    {
  title: "Introduction",
  data: true,
  image: IntroductionImage,
  route: "/introduction"
},
  {
  title: "Reference",
  data: true,
  image: ReferenceImage,
  route: "/clear-junction-reference"
}
  ];

  return (
    <CommonCardPage
      pageTitle="Clear Junction Rest API"
      cards={cards}
      backRoute={"/registration-scope"}
    />
  );
};

export default ClearJunctionRestApiPage;
