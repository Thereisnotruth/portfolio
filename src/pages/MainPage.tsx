import Header from '@components/Header';
import Footer from '@components/Footer';
import Profile from '@components/Profile';
import Skills from '@components/Skills';
import Educations from '@components/Educations';
import Projects from '@components/Projects';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__content">
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
