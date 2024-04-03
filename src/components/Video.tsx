import React from "react";

const Video = (props) => {
  return (
    // <video src="/images/test.mp4" autoPlay loop className="w-full h-[240px] rounded-2xl">
    //   Your browser does not support the video tag.
    // </video>
    <iframe
      id="player"
      className="w-full h-[240px] rounded-2xl"
      src={props.url}
      allow="autoplay"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  );
};

export default Video;
