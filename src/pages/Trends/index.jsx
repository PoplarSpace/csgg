import React, { Component } from "react";
import Left_nav from "../../component/Leftnav";
import Trendcontens from "./Right_Content/index";
import Engineer from "./Engneer";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
/**
 * 公司动态
 */
class Trends extends Component {
  render() {
    return (
      <div className="Both_Shell">
        <div className="inner_shell">
          <Left_nav />
          <Switch>
            <Route path="/Trends/trend" component={Trendcontens} />
            <Route path="/Trends/engineer" component={Engineer} />
          </Switch>
          <Redirect to="/Trends/trend" />
        </div>
      </div>
    );
  }
}

export default withRouter(Trends);
