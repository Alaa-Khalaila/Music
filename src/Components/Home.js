import React from "react";
import { useState, useEffect } from "react";
import song from "./img/song.mp3";

const Home = () => {
  const [audio] = useState(new Audio(song));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  return (
    <div className="container">
      <div className="left-side">
        <h1>
          THE<br></br> REAL<br></br> SOUND
        </h1>
      </div>
      <div className="audio">
        <h3>Click here to listen</h3>
        <div onClick={toggle}>
            {playing ? <i class="fa fa-pause-circle"></i> :  <i className="fa fa-play-circle " ></i>}
        </div>
        
      </div>
    </div>
  );
};

export default Home;
