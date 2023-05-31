import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";
//below is the spotify API object responsible for rest of the functionality
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  //run code based on a given condition
  useEffect(() => {
    //remove below line:
    // setToken(
    //   "BQBamCluLEsdHpP_UP67mtf6e6H-XY1zlCaedqAA6ILwQlPYZ4O28sxDP1YmRcSbcd8BKOQyGqetftL94NAZHG83Dt5Z9wcWw4T74xvQomD1yE1GlGzHAZUzkVJU5Tobwv6ay41OqmNtRX5ZcFZmt-EoE1NVkdnFUqeg400kg8pT26bj7z9g"
    // );
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);
      spotify.setAccessToken(_token);

      //below is just a test
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("5cAwvaSXeNSrSbmrOUSBzo").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    console.log("I have a token", token);
  }, [token, dispatch]);
  console.log("SPOOOOOOOOOOOOOOOOOTTT");
  console.log("USER", user);
  console.log("TOKEN", token);

  return (
    //BEM
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
