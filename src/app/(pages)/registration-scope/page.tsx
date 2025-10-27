import { TestPageImage } from '@/assets';
import CommonCardPage from '@/components/common-card-page';
import React from 'react';

const RegistrationScopePage = () => {
  const cards = [
    {
      title: "Card One",
      image: TestPageImage,
      route: "/some-page"
    },
  {
      title: "Card Two",
      image: TestPageImage,
      route: "/another-page"
    },
  {
      title: "Card Three",
      image: TestPageImage
    },
  {
      title: "Card Four",
      image: TestPageImage,
      route: "/yet-another-page"
    }
  ];

  return (
    <CommonCardPage
      pageTitle="Registration Scope"
      cards={cards}
      backRoute={"/"}
    />
  );
};

export default RegistrationScopePage;
