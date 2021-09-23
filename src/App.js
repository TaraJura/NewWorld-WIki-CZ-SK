import './style/style1.css';
import Itemy from './pages/Itemy';
import Minimapa from './pages/minimapa';
import Home from './home';
import Companies from './companies';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="menu">
        <ul className="nav">
          <li><Link to="/"><h1>New World-Wiki</h1></Link></li>
          <li><Link to="/itemy"><h2>Itemy</h2></Link></li>
          <li><Link to="/minimapa"><h2>MiniMapa</h2></Link></li>
          <li><Link to="/companies"><h2>Company</h2></Link></li>
          <li><Link to="/tipyatriky"><h2>Exp</h2></Link></li>
          <li><Link to="/discord"><h2>CZ / SK Company</h2></Link></li>
        </ul>
      </div>
        <div>
          <Switch>
            <Route path="/itemy">
                <Itemy />
            </Route>
            <Route path="/minimapa">
              <Minimapa />
            </Route>
            <Route path="/companies">
              <Companies />
            </Route>
            <Route path="/tipyatriky">
              <tipyatriky />
            </Route>
            <Route path="/discord">
              <discord /> 
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}


export default App;
