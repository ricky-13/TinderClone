import './App.css';
import Header from './Header.js';
import TinderCards from './TinderCards';
import Home from './Home'
import AddCard from './AddCard';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      
      {/* <TinderCards /> */}

      <Router>
      <Header />
      {/* always add your components inside this router tag, otherwise basename something error */}
        <Routes>
          <Route path = '/' element = { <Home /> } />
          <Route path='/addCard/' element={ <AddCard /> } />
        </Routes>
        <SwipeButtons />
      </Router>

      

      
    </div>
  );
}

export default App;
