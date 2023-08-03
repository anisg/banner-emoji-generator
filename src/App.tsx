import React, { useState } from "react";
import { MoonIcon } from "./icons/Moon";
import logo from "./logo.svg";
import { MainPage } from "./components/live/mainPage/MainPage";

function App() {
  return (
    <MainPage frames={{
      mainPage: {
        className: "w-full h-full"
      }
    }} />
  );
}

export default App;
