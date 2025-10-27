import { mainTestLogo } from '@/assets'
import CommonCardPage from '@/components/common-card-page'
import React from 'react'

const page = () => {
  const cards = [
    {
      title: "Card 1 (Clickable)",
      image: mainTestLogo,
      route: "/" // Navigate to home
    },
    {
      title: "Card 2 (Not Clickable)",
      image: mainTestLogo
      // No route provided - card won't be clickable
    },
    {
      title: "Card 3 (Clickable)",
      image: mainTestLogo,
      route: "/starter-tamplate-page" // Example route
    },
    {
      title: "Card 4",
      image: mainTestLogo,
      route: "/starter-tamplate-multi-images" // Example route
    },
    {
      title: "Card 5",
      image: mainTestLogo
      // No route - not clickable
    },
    {
      title: "Card 6",
      image: mainTestLogo,
      route: "/"
    }
  ];

  return (
    <CommonCardPage
      pageTitle="Test"
      cards={cards}
      backRoute="/"
    />
  )
}

export default page