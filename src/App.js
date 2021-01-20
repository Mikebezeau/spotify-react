import './sass/App.scss';
import './sass/Gradient_transform.scss';
import Nav from './components/Nav';
import Main from './components/Main';
import MusicControls from './components/MusicControls';

function App() {
  return (
    <div className="outerWQrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
      <MusicControls/>
    </div>
  );
}

export default App;
