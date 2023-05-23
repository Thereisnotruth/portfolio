import Header from '@components/Header';
import Footer from '@components/Footer';
import Profile from '@components/Profile';
import Skills from '@components/Skill';
import Education from '@components/Education';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__content">
        <Profile />
        <Skills />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
