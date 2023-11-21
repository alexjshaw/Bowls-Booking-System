import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import classes from "./TestPage.module.css"

import Header from "../components/Header";

import { Center, Box } from "@mantine/core";

export default function TestPage() {

  return (
    <Center className={classes.center}>
      <Box className={classes.header}>
        <Header />
      </Box>
      
      <Box className={classes.mainContent}>
        <Box className={classes.leftColumn}>
          {/* Left column content goes here */}
        </Box>
        <Box className={classes.rightColumn}>
          {/* Right column content goes here */}
        </Box>
      </Box>

      <Box className={classes.footer}>
        {/* Footer content goes here */}
      </Box>
    </Center>
  );
}

/*
  const [count, setCount] = useState(0)
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
*/