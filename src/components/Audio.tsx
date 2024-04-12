import React from "react";

type AudioProps = {
  url?: string;
};

const Audio: React.FC<AudioProps> = (props) => {
  return (
    <>
    <video controls className="w-full h-[40px]">
      <source src={props.url} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </video>
    </>
  );
};

export default Audio;
