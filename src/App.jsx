import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
// import Router from './routes';
// import './App.css'
import TestPage from "./pages/TestPage.jsx"
import { Center } from '@mantine/core';

function App() {

  return (
    <MantineProvider>
      <Center h="100vh" w="100vw" bg="var(--mantine-color-red-1)">
      <TestPage />
      </Center>
    </MantineProvider>
  )
}

export default App
