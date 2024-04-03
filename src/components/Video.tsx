import React from "react";

const Video = () => {
  return (
    // <video src="/images/test.mp4" autoPlay loop className="w-full h-[240px] rounded-2xl">
    //   Your browser does not support the video tag.
    // </video>
    <iframe
      id="player"
      className="w-full h-[240px] rounded-2xl"
      src="https://www.youtube.com/embed/O7FJjniSrUw?playlist=O7FJjniSrUw&autoplay=1&loop=1&modestbranding=1&rel=0&hl=sv&mute=1"
      allow="autoplay"
      frameBorder="0"
      allowTransparency
      allowFullScreen
    ></iframe>
  );
};

export default Video;
