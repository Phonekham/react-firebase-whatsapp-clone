import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Chat from "./components/chat/Chat";

import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="app__body">
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
      </div>
    </div>
  );
}

export default App;
