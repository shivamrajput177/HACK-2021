import React, { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import "../Resources/styles.css";

const VideoView = () => {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 500;
  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("liveVideoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("liveVideoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <Fragment>
      <Navbar />
      <div className="videoView">
        <div className="videoContainer">
          <video
            height={HEIGHT}
            width={WIDTH}
            muted
            autoPlay
            className="liveVideoFeed"
          ></video>
        </div>
        <div className="btn">
          {playing ? (
            <button onClick={stopVideo} className="btn-danger">
              Stop
            </button>
          ) : (
            <button onClick={startVideo} className="btn-success">
              Start
            </button>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default VideoView;
