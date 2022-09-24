import React from "react";
import Header from "./components/Header";
import Map from "./components/Map";
import { useIpContext } from "./context";

import "./App.css";

function App() {
  const { loading } = useIpContext();

  return (
    <>
      {!loading ? <Header /> : "loading..."}
      {!loading ? <Map /> : "loading..."}
    </>
  );
}

export default App;
