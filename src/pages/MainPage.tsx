import { useState } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';
import Profile from '@components/Profile';
import Skills from '@components/Skills';
import Educations from '@components/Educations';
import Projects from '@components/Projects';

function MainPage() {
  // const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [marginTop, setMarginTop] = useState<number>(0);
  return (
    <div className="main-page">
      <Header setMarginTop={setMarginTop} />
      <div className="main-page__content" style={{ marginTop: marginTop }}>
        <Profile />
        <Skills />
        <Educations />
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
