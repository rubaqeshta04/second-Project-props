import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Artical from "./Artical";
import "./App.css";

function App() {
  const firstArtical = `
  aaaaaa
  cccc
  ddddd`;

  const secondArtical = `
  alyaa
  ccccc
     jjkkk`;
  return (
    <>
      <h1 className="bg-red-500">ruba</h1>
      <Artical name="Ahmed" email="ahmad@gmail.com" content = {firstArtical}>
        <h1>hello world</h1>
      </Artical>
      <Artical name="Ali" email="ali@gmail.com" />
      <Artical name="Ruba" email="ruba@gmail.com" />
    </>
  );
}

export default App;
