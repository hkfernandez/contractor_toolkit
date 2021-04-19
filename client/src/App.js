
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from './Components/Home'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
    </Router>
  );
}

export default App;
