export function SongListItem({ song, isCurrentSong, onSelect }) {
  console.log(song);

  function handleSelect() {
    onSelect(song);
  }

  return (
    <li
      className={`SongListItem ${isCurrentSong ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <img className="songCover" src={song.coverUrl} alt="cover" />
      <div className="songInfo">
        <span className="songTitle">{song.title}</span>
        <span className="songArtist">{song.artist}</span>
      </div>
    </li>
  );
}
