import React from "react";

const Audio = (props) => {
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
