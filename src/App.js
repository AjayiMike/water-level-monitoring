import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Settings from "./pages/Settings"
import SetThresholdLevel from "./pages/SetThresholdLevel"
import ResetPassword from "./pages/ResetPassword"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useState} from "react";

function App() {


  const users = [
    {
      username: "user1@gmail.com",
      password: "user1password"
    },
    {
      username: "user2@gmail.com",
      password: "user2password"
    },
    {
      username: "user3@gmail.com",
      password: "user3password"
    }
  ]

 
 const userExist = (username, password) => {
   for(let i = 0; i<= users.length; i++) {
     if(users[i].username === username && users[i].password === password ) {
       console.log(("routing"));
       return true;
     }
   }
   return false
 }


 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/signin">
              <Signin userExist = {userExist} />
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
