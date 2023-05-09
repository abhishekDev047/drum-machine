"use client";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState('press a key')
  const play = (x) => {
    const audio = new Audio(x);
    audio.play();
  };
  const handleClick = (event) => {
    const src = event.currentTarget.querySelector("audio").src;
    const idx = event.currentTarget.querySelector("audio").id;
    setText(idx)
    play(src);
  };
  return (
    <main className="d-flex bg-secondary-subtle  container-fluid vh-100 align-items-center justify-content-center">
      <div
        id="drum-machine"
        className=" container-fluid d-flex align-items-center justify-content-center p-3  "
      >
        <div className="p-2 row ">
          <button
            id="Q"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            Q
            <audio
              id="Heater 1"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            ></audio>
          </button>
          <button
            id="W"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            <audio id="Heater 2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
            W
          </button>
          <button
            id="E"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            E
            <audio id="Heater 3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
          </button>
          <button
            id="A"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            A
            <audio id="Heater 4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
          </button>
          <button
            id="S"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            S <audio id="Clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
          </button>
          <button
            id="D"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            D <audio id="Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
          </button>
          <button
            id="Z"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            Z <audio id="Kick-n-Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
          </button>
          <button
            id="X"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            X <audio id="Kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
          </button>
          <button
            id="C"
            className="drum-pad btn btn-secondary py-3 px-2 col-3 m-1 btn-sm"
            onClick={handleClick}
          >
            C <audio id="Close-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
          </button>
        </div>
        <div className="d-flex-col">
          <div id="display" className="px-5 py-2 bg-dark w-auto text-light">
            {text}
          </div>
        </div>
      </div>
    </main>
  );
}
