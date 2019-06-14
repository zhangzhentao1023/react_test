import React from 'react'
import {HashRouter,BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from './pages/login/Login'
import Admin from './pages/admin/Admin'

export default class App extends React.Component{

  render (){
    return (
        <HashRouter>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/" component={Admin}></Route>
          </Switch>
        </HashRouter>

    )
  }
}




