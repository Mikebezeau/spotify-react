import './sass/Variables.scss';
import './sass/AppMain.scss';
import './sass/GradientTransform.scss';
import './sass/MusicControls.scss';
import './sass/Nav.scss';

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
