import { createContext } from "react";
import { BACKEND_URL } from "../constants";

export const SongContext = createContext();

export const SongContextState = ({ children }) => {
  let __URL__ = BACKEND_URL;
  const audio = new Audio();
  const song = {
    songUrl: "",
    songName: "",
    songArtist: "",
    songAlbum: "",
    isPlaying: false,

    setSongUrl: (url) => {
      song.songUrl = url;
    },
    setSongName: (name) => {
      song.songName = name;
    },
    setArtistName: (name) => {
      song.songArtist = name;
    },
    setAlbumName: (name) => (song.songAlbum = name),
    setIsPlaying: (val) => {
      song.isPlaying = val;
    },
  };

  return (
    <SongContext.Provider value={{ audio, song, __URL__ }}>
      {children}
    </SongContext.Provider>
  );
};
