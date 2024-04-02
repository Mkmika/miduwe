import React from "react";

const Video = () => {
  return (
    <video src="/images/test.mp4" autoPlay loop className="w-full h-[240px] rounded-2xl">
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
