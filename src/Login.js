import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      {/* Spotify Logo */}
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
        alt="Spotify Logo"
      />
      {/* Login With Spotify Logo */}
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
//http://localhost:3000/#access_token=BQC1d4VgsDRvf5TirK7bIHnyimzVcyYzlGS-EhoRwwb9e0W0mD3nDK6OfAPULEqX0wuJp7wXHT-U0beuDOBX5rL2ODfc5TUTGw48CU0i4IFr_7yVGiDCOQi-Dg8IAig6M2wuMtFpQ2MRWLWC4fvjZC-OI6hRn9zLnlg_jhbJ-uuEdOWPQoDC&token_type=Bearer&expires_in=3600
export default Login;
