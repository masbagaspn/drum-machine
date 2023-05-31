import React, { useContext, useEffect, useRef } from "react";
import { AppContext } from "../App";

function DrumPad({ audio }) {
  const { power, setText } = useContext(AppContext);

  const play = () => {
    const audioElement = document.getElementById(`${audio.key}`);
    audioElement.play();
    setText(audio.name);
  };

  const handleClick = () => {
    if (power) {
      play();
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === audio.keyCode) {
      if (power) play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <button
      key={audio.key}
      id={audio.name}
      className="drum-pad"
      onClick={() => handleClick()}
      onKeyDown={(e) => handleKeyPress(e)}
    >
      <audio
        id={audio.key}
        className="clip"
        src={audio.src}
        type="audio/mpeg"
      />
      {audio.key}
    </button>
  );
}

export default DrumPad;
