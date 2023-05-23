import Header from '@components/Header';
import Footer from '@components/Footer';
import Profile from '@components/Profile';

function MainPage() {
  return (
    <div className="main-page">
      <Header />
      <div className="main-page__content">
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;
