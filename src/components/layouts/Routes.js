import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../pages/Login";
import MainLandingPage from "../pages/MainLandingPage";
import Signup from "../pages/Sigup";
import { createBrowserHistory } from "history";

import AdminLayout from "../../layouts/Admin/Admin.js";
//import RTLLayout from "./layouts/RTL/RTL.js";


import "../../assets/scss/black-dashboard-react.scss";
import "../../assets/demo/demo.css";
import "../../assets/css/nucleo-icons.css";


const hist = createBrowserHistory();

class MainRoute extends Component {
  render() {
    return (
      <div>
        <Router  history={hist}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route  path="/admin" render={props => <AdminLayout {...props} />} />
            <Route exact path="/" component={MainLandingPage} />
        
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MainRoute;


// <Router history={hist}>
// <Switch>
//   <Route exact path="/admin/dashboard" render={props => <AdminLayout {...props} />} />
//   {/* <Route path="/rtl" render={props => <RTLLayout {...props} />} /> */}
//   <Route exact path="/" component={App}/>
//       </Switch>
// </Router>