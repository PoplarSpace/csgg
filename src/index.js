//移入react核核心库
import React from 'react'
//引入reactdom
import ReactDOM from 'react-dom'
//引入App组件
import App from './App'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import Login from './pages/Login/Login'
import Admin from './pages/admin/admin'



//渲染app组件到页面
ReactDOM.render(
    <Router>
<Switch>

<Route path='/admin' render={routeProps=><Admin{...routeProps}/>}/>
<Route exact path='/login' component={Login}/>
<Route  render={routeProps=><App {...routeProps}/>}/>



<Redirect to="/homepage"/>

</Switch>
</Router>
,document.querySelector('#root'))