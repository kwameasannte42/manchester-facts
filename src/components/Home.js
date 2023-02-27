import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="text-center">
        <Link className="hey" to='/Fact1'><button className="btn btn-lg btn-primary m-2">Fact1</button></Link>
        <Link className="hey" to='/Fact2'><button className="btn btn-lg btn-danger m-2">Fact2</button></Link>
        <Link className="hey" to='/Fact3'><button className="btn btn-lg btn-secondary m-2">Fact3</button></Link>
      </div>
    </div>
  )
}

export default Home