import React from 'react';
import { Footer, NavTopBar } from '../../components';
import SectionBanner from '../../containers/LandingPage/SectionBanner/SectionBanner';
import SectionOurBestServices from '../../containers/LandingPage/SectionOurBestServices/SectionOurBestServices';
import SectionStatic from '../../containers/LandingPage/SectionStatic/SectionStatic';

const HomePageComponents = () => {
  return (
    <div>
      <NavTopBar />
      <SectionBanner />
      <SectionStatic />
      <SectionOurBestServices />
    </div>
  );
};

export default HomePageComponents;
