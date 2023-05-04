import './styles/style.css';
import photo from './assets/personal-photo.jpg';
import { Photo } from './components/Photo';
import Contact from './components/Contact';
import TopName from './components/TopName';

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
        </div>
      </div>
    </>
  );
}

export default App;
