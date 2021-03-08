import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* sideBar*/}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
