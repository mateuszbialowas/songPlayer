import { useRef } from "react";
import { Heading } from "./Heading";

export function SongPlayer({ showControls = false, song }) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  const style = {
    background: `url(${coverUrl}) no-repeat center/cover`,
  };

  return (
    <section className="SongPlayerSection" style={style}>
      <div className="SongPlayer">
        <Heading title="Music Player" />
        <img className="App-player-cover" src={coverUrl} alt="cover" />
        <audio ref={audioRef} key={audioUrl} controls={showControls}>
          <source src={audioUrl} />
        </audio>
        <div className="playerButtons">
          <button
            className="playButton"
            onClick={() => audioRef.current.play()}
          >
            <i className="fas fa-play"></i>
          </button>
          <button
            className="pauseButton"
            onClick={() => audioRef.current.pause()}
          >
            <i className="fas fa-pause"></i>
          </button>
        </div>
      </div>
    </section>
  );
}