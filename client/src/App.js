
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Components/Header'
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/auth/login' component={Login} />
    </Router>
  );
}

export default App;
