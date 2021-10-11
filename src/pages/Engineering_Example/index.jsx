import React, { Component } from "react";
import Content from "./Right_Content";
import Leftnav from "../../component/Leftnav";
import Message from "./Message/message";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";
/**
 * 工程实例
 */
export default class Engineering_Example extends Component {
  render() {
    return (
      <div className="Both_Shell">
        <div className="inner_shell">
          <Leftnav />
          <Switch>
            <Route path="/Engineering_Example/message" component={Message} />
            <Route path="/Engineering_Example/content" component={Content} />
          </Switch>
          <Redirect to="/Engineering_Example/content" />
        </div>
      </div>
    );
  }
}
