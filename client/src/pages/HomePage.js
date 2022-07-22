import React from "react";
import MainNav from "../components/MainNav";
import Post from "../components/Post";
import "../style/index.scss";

export default function HomePage() {
    return (
     <div className="wrapper">
      <MainNav/>
      <Post/>
     </div>
     
    
    );
  }