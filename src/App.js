import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Fact1 from "./components/Fact1";
import Fact2 from "./components/Fact2";
import Fact3 from "./components/Fact3";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-4 bg-info text-white bg-opacity-50 text- border">
        {/* <Switch>
          <Route exact path="/"> */}
            <h1 className="text-center">Manchester United Fun Facts App!</h1>
            <br />
            <p className="text-center">Click one button below to see a fact </p>
            <Home />
          {/* </Route>
        </Switch> */}
      </div>
      <div className="mt-4">
        <Switch>
        {/* <Route exact path="/"><Home /></Route>
          <Route path="/Fact1"><Fact1 /></Route>
          <Route path="/Fact2"><Fact2 /></Route>
          <Route path="/Fact3"><Fact3 /></Route>  */}
          {/* <Route exact path='/' component={Home} /> */}
          <Route path='/Fact1' component={Fact1} />
          <Route path='/Fact2' component={Fact2} />
          <Route path='/Fact3' component={Fact3} />


        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
