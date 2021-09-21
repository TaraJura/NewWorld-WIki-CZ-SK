import './style1.css';
import Itemy from './Itemy';
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
        <li><Link to="/home"><h1>New World-Wiki CZ/SK</h1></Link></li>
        <li><Link to="/itemy"><h2>Itemy</h2></Link></li>
        <li><Link to="/minimapa"><h2>MiniMapa</h2></Link></li>
        <li><Link to="/tipyatriky"><h2>Tipy a Triky</h2></Link></li>
        <li><Link to="/discord"><h2>Discord</h2></Link></li>  
        </ul>
        <Switch>
          <Route path="/home">
            <home />
              
          </Route>
          <Route path="/itemy">
            <itemy />
              <Itemy />
          </Route>
          <Route path="/minimapa">
            <minimapa />
              
          </Route>
          <Route path="/tipyatriky">
            <tipyatriky />
             
          </Route>
          <Route path="/discord">
            <discord />
              
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
