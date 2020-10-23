import React from 'react';
import Login from './containers/Login/Login'
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Organisations from "./containers/Organizations/Organizations"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path = "/" exact component = {Login}></Route>
        <Layout>
          <Route path = "/organisations" exact component = {Organisations}></Route>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
