import { useState } from "react";
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import { tracks } from "./tracks";

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} />
        <div style={{ marginTop: "1rem" }}>
          <DisplayTrack currentTrack={currentTrack} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <DisplayTrack currentTrack={currentTrack} />
        </div>

        <Controls />
        <div style={{ marginBottom: "20%" }}>
          <ProgressBar />
        </div>
      </div>
    </div>
  );
};
export default AudioPlayer;
