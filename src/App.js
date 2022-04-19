import React, { useEffect, useState } from "react";
import useContentful from "./useContentful";
import { useHistory } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/Carousel";
import RosterCards from "./components/RosterCards";
import Main from "./components/Main";
import ArtistsPage from "./pages/ArtistsPage";

function App() {
  // const [rosterData, setRosterData] = useState([]);
  // const { getRosterData } = useContentful();

  // useEffect(() => {
  //   getRosterData().then((response) => setRosterData(response));
  // });

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
