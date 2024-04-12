import React from "react";

type AudioProps = {
  url?: string;
};

const Audio: React.FC<AudioProps> = (props) => {
  return (
    <>
    <audio controls>
      <source src={props.url} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    </>
  );
};

export default Audio;
