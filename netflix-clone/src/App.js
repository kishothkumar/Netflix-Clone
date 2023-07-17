import './App.css';
import Row from './Row/Row';
import requests from './requests';
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default App;
