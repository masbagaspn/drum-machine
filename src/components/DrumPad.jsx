import React, { useEffect } from 'react'

function DrumPad({ onPlay, audio }) {

    const handleClick = (id) => {
        onPlay(id, audio.name)
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === audio.keyCode){
            onPlay(audio.key, audio.name)
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyPress)

        return () => document.removeEventListener('keydown', handleKeyPress)
    }, [])

  return (
    <button 
        key={audio.key} 
        className='drum-pad'
        onClick={() => handleClick(audio.key)}
    >
        <audio id={audio.key} className='clip' src={audio.src} type='audio/mpeg' />
        {audio.key}
    </button>
  )
}

export default DrumPad