import React from "react";
import { Route, Routes } from "react-router-dom";
import InstaPage from "../pages/InstaPage";
import ArtistsPage from "../pages/ArtistsPage";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import useContentful from "../useContentful";

const Main = (props) => {
  const [rosterData, setRosterData] = useState([]);
  const { getRosterData } = useContentful();

  useEffect(() => {
    getRosterData().then((response) => setRosterData(response));
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<ArtistsPage rosterData={rosterData} />}
        ></Route>
        <Route path="/instagram" element={<InstaPage />}></Route>
      </Routes>
    </Router>
  );
};

export default Main;
