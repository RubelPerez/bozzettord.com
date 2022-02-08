import React, { Component } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Index from './views/Index'

class App extends Component {

  render() {
    const routes = [
      "/",//0

    ];
    return (
      <BrowserRouter>
        <Routes>
          <Route path={routes[0]} element={<Index />} />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default App;
