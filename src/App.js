import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowSec from './components/Row/RowSec';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowSec/>
    </div>
  );
}

export default App;
