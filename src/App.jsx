import { createContext, useState } from "react";
import "./App.css";
import { audios } from "./audio";
import DrumPad from "./components/DrumPad";

export const AppContext = createContext();

function App() {
  const [power, setPower] = useState(true);
  const [text, setText] = useState("");

  return (
    <AppContext.Provider value={{ power, setPower, text, setText }}>
      <main>
        <section id="drum-machine">
          <div id="drum-pad-container">
            {audios.map((audio) => (
              <DrumPad key={audio.key} audio={audio} />
            ))}
          </div>
          <div id="display">
            <button id="power-button" onClick={() => setPower(!power)} />
            <h1>{text}</h1>
          </div>
        </section>
      </main>
    </AppContext.Provider>
  );
}

export default App;
