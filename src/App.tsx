import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import Contact from './components/Contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <About />
      <Values />
      <Contact />
    </ThemeProvider>
  )
}

export default App
