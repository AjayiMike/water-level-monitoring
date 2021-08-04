import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import SetThresholdLevel from "./pages/SetThresholdLevel"
import ResetPassword from "./pages/ResetPassword"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/signin">
              <Signin />
          </Route>
          <Route path = "/settings">
              <Settings />
          </Route>
          <Route path = "/threshold">
              <SetThresholdLevel />
          </Route>
          <Route path = "/reset-password">
              <ResetPassword />
          </Route>
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
