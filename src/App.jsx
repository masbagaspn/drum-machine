import { useState } from 'react'
import './App.css'
import { audios } from './audio'
import DrumPad from './components/DrumPad'

function App() {
  const [state, setState] = useState({
    onplay: '',
    volume: 100,
    power: true
  })

  const onPlay = (id, name) => {
    if(state.power){
      const audio = document.getElementById(id)
      audio.currentTime = 0
      audio.volume = state.volume / 100
      audio.play()
      setState({ ...state, onplay: name })
    }
  }

  return (
    <main>
      <section id="drum-machine">
        <div id='drum-pad-container'>
          {
            audios.map(audio => (
              <DrumPad key={audio.key} onPlay={onPlay} audio={audio} />
            ))
          }
        </div>
        <div id="display">
          <h1>{state.onplay}</h1>
        </div>
      </section>
    </main>
  )
}

export default App
