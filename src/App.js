import React from 'react';
import Login from './containers/Login/Login'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Organisations from "./containers/Organizations/Organizations"

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
        <Route path = "/" exact component = {Login}></Route>
        <Layout>
          <Route path = "/organisations" exact component = {Organisations}></Route>
        </Layout>
      </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
