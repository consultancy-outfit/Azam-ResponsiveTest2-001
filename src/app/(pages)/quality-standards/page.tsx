import { CqcFundamentalStandardsImage, CareQualityCommissionCqcOverviewImage, CrossSectorInspectionsImage } from '@/assets';
import CommonCardPage from '@/components/common-card-page';
import React from 'react';

const QualityStandardsPage = () => {
  const cards = [
    {
      title: "Standard One",
      image: CqcFundamentalStandardsImage,
      route: "/standard-details"
    },
  {
      title: "Standard Two",
      image: CareQualityCommissionCqcOverviewImage
    },
  {
      title: "Standard Three",
      image: CrossSectorInspectionsImage,
      route: "/cross-sector"
    }
  ];

  return (
    <CommonCardPage
      pageTitle="Quality Standards Overview"
      cards={cards}
      backRoute={"/"}
    />
  );
};

export default QualityStandardsPage;
