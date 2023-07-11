import { createContext, useState } from "react";
import "./App.css";
import ReactSwitch from "react-switch";

import Navbar from "./components/navbar";
import AudioPlayer from "./components/AudioPlayer";
import faith from "./assets/faithoverfear.jpg";
import fofheader from "./assets/FaithOFear.png";
import chanzGif from "./assets/chanzGiff.gif";
import albumC from "./assets/chanzAlbum.png";
import albumz from "./assets/latest.png";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Navbar />

        <div style={{ backgroundColor: "black", marginBottom: "7rem" }}>
          <img
            src={fofheader}
            alt="header image"
            style={{ height: "25vmin", marginTop: "4em" }}
          />
        </div>
        <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        <img src={faith} alt="main image" style={{ height: "70vmin" }} />
        <div style={{ marginTop: "3rem" }}>
          <div>
            <h2 id="musSection">Music section</h2>
            <AudioPlayer />
          </div>

          <img src={chanzGif} alt="chanz Gif" style={{ height: "70vmin" }} />
          <img
            src={albumC}
            alt="album cover"
            style={{ height: "100vmin", marginTop: 180 }}
          />
        </div>
        <h1 style={{ marginBottom: "3em", marginTop: "3em" }}>Latest Albums</h1>
        <div className="albumzz">
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
          <img
            src={albumz}
            alt="alumz"
            style={{
              height: "50vmin",
              marginRight: "8em",
              marginLeft: "4em",
              marginBottom: "4em",
            }}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
