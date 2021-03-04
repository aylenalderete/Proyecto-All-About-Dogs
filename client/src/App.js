import Home from "./components/Home"
import Buscar from "./components/Buscar"
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import DogDetail from "./components/DogDetail";
import AgregarPerro from "./components/AgregarPerro";

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path='/' component={Home}/>
          <Route exact path='/buscar' component={Buscar}/>
          <Route exact path= '/dog-detail/:id' component= {DogDetail}/>
          <Route exact path= "/agregarperro" component= {AgregarPerro}/>
      </Router>
    </div>
  );
}

export default App;
