import React, { Component, lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Engineering_Example from "./pages/Engineering_Example";
import Company_Profile from "./pages/Company_Profile";
import Trends from "./pages/Trends";
import Business from "./pages/Business";
import Contact from "./pages/Contact";
import Message from "./pages/Message";
import Head from "./component/Head";
import Footer from "./component/Footer/index";
import "./App.less";
import Login from "./pages/Login/Login";
import List from "./pages/admin/products/List";
import "./App.css";

// const Engineering_Example = lazy(() => import("./pages/Engineering_Example"));
// const Company_Profile = lazy(() => import("./pages/Company_Profile"));
// const Trends = lazy(() => import("./pages/Trends"));
// const Business = lazy(() => import("./pages/Business"));
// const Contact = lazy(() => import("./pages/Contact"));
// // const Message = lazy(() => import("./pages/Message"));

export default class App extends Component {
  getMessage = (date) => {
    this.date = date;
  };
  render() {
    return (
      <div>
        <Head />
        {/* Swiper */}

        {/* 组件展示区 */}

        <Switch>
          {/* 路由注册 */}

          <Route path="/HomePage" component={HomePage} />
          <Route
            path="/Engineering_Example"
            component={Engineering_Example}
            getMessage={this.getMessage}
          />
          <Route path="/Company_Profile" component={Company_Profile} />
          <Route path="/login" component={Login} />
          <Route path="/admin/products" component={List} />
          <Route path="/message" component={Message} />

          <Route path="/Trends" component={Trends} />
          <Route path="/Business" component={Business} />
          <Route path="/Contact" component={Contact} />

          <Redirect to="/HomePage" />
        </Switch>

        {/* Footer */}

        <div className="box"></div>
        <Footer />
      </div>
    );
  }
}
