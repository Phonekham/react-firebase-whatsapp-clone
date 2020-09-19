import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/chat/Chat";
import Login from "./components/Login/Login";

import Sidebar from "./components/Sidebar/Sidebar";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="App">
      <div className="app__body">
        {!user ? (
          <Login></Login>
        ) : (
          <Router>
            <Sidebar></Sidebar>
            <Switch>
              <Route exact path="/">
                {/* <Chat></Chat> */}
              </Route>
              <Route path="/rooms/:roomId">
                <Chat></Chat>
              </Route>
            </Switch>
          </Router>
        )}
      </div>
    </div>
  );
}

export default App;
