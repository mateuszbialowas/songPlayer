import "./App.css";
import { useEffect, useState } from "react";
import { Heading } from "./Heading";
import { SongPlayer } from "./SongPlayer";
import { SongListItem } from "./SongListItem";

export default function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs\n";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, [URL]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  return (
    <div className="App">
      {songs.length === 0 ? (
        <span className="notLoaded">"Loading ..."</span>
      ) : (
        <>
          <SongPlayer song={currentSong} />
          <section className="SongListItemSection">
            <Heading title="Songs" />
            <ul className="SongListItems">
              {songs.map((song) => (
                <SongListItem
                  key={song.audioUrl}
                  song={song}
                  isCurrentSong={currentSong.audioUrl === song.audioUrl}
                  onSelect={handleSelectSong}
                />
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
