import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import Home from "./containers/Home/Home";
import * as serviceWorker from "./serviceWorker";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  history
} from "react-router-dom";
import Front from "./containers/Front/Front";

// ReactDOM.render(<Home />, document.getElementById('root'));

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        {/* <Route path="/404" component={NotFound} />
        <Route path="/admin" component={Admin} /> */}
        <Route component={Front} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
