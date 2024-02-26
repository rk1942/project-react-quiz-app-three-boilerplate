import React from "react";
import "../css/HomeComponent.css"
import { Link } from "react-router-dom";

export default function HomeComponent(){

  return(
    <div className="home">
      <h3 className="home-heading">QUIZ</h3>
      <h3 className="home-headingg">APP</h3>
      <Link to="play-quiz" className="home-bt">
        <button className="home-bt">Play</button>
      </Link>
    </div>
  )
}