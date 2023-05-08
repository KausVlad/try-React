import './styles/style.css';
import photo from './assets/personal-photo.jpg';
import { Photo } from './components/Photo';
import Contact from './components/Contact';
import TopName from './components/TopName';
import Experience from './components/Experience';
import { About } from './components/About';
import Repo from './components/Repo';
import Rating from './components/Rating';

function App() {
  return (
    <>
      <div className="main-theme">
        <div className="container">
          <div className="left-bar">
            <TopName />
            <Photo srcPhoto={photo} />
            <Contact />
          </div>
          <div className="content">
            <Rating />
            <About />
            <Experience />
            <Repo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
