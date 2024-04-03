import React from "react";

const Audio = () => {
  return (
    <>
    <audio controls>
      <source src="horse.ogg" type="audio/ogg" />
      <source src="horse.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
    </>
  );
};

export default Audio;
