// ===================
// DEPENDENCIES
// ===================
// packages
import React, { Component } from "react";

// ===================
// COMPONENT
// ===================
class App extends Component {
  constructor() {
    super();
    this.state = {playlist:playlist}
  }
  render() {
    return (
    <div class="tunr_container">
    </div>;
  <div className="playlist">
    <h1>{this.state.playlist.title}</h1>
    <div className="songs">
      {this.state.playlist.songs.map( (song, index) => {
        return (
          <div classname="song" key={index}>
            <h1>{song.title}</h1>
            <h2>{song.artist}</h2>
            <h3>{song.time}</h3>
          </div>
        )
      })}
      <div className="song">
        <h1>{this.state.playlist.songs[0].title}</h1>
        <h2>{this.state.playlist.songs[0].artist}</h2>
        <h3>{this.state.playlist.songs[0].time}</h3>
      </div>
    </div>
  </div>

    )
  }
}

// ===================
// EXPORT
// ===================
export default App;
