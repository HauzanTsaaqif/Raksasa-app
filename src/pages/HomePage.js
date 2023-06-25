import '../App.css';
import Header from '../component/Header';
import SlideImage from '../component/Cover';
import TopicList from '../component/TopicList';
import Footer from '../component/Footer';

function HomePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');

  return (
    <>
      <div className='mainContainer'>
        <Header />
        <SlideImage />
        <h1>Materi Pembelajaran</h1>
        <div className='breakline'></div>
        <TopicList username={username} />
        <a href='/comm-page/'><Footer /></a>
      </div>
    </>
  );
}

export default HomePage;