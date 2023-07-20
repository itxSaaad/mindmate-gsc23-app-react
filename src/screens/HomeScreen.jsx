import React, { Suspense } from 'react';

import Loader from '../components/Loader';
import Meta from '../components/Meta';

const CommunicateSection = React.lazy(() =>
  import('../components/Home/CommunicateSection')
);
const FAQSection = React.lazy(() => import('../components/Home/FAQSection'));
const TestimonialSection = React.lazy(() =>
  import('../components/Home/TestimonialSection')
);
const HeroHome = React.lazy(() => import('../components/Home/HeroHome'));

const HomeScreen = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Meta />
      <HeroHome />
      <FAQSection />
      <CommunicateSection />
      <TestimonialSection />
    </Suspense>
  );
};

export default HomeScreen;
