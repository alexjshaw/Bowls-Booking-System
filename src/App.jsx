import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import Router from './routes';
// import './App.css'
import TestPage from "./pages/TestPage.jsx"
import { Center, Box, Container } from '@mantine/core';
import classes from "./App.module.css"

function App() {

  return (
    <MantineProvider>
      <Box h="100vh" w="100vw" bg="var(--mantine-color-red-1)" className={classes.mainBox}>
      <TestPage />
      </Box>
    </MantineProvider>
  )
}

export default App
