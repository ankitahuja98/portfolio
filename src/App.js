import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './utils/Theme';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';



const Body = styled.div`
  background-color : ${({ theme }) => theme.bg};
  width :100%;
  height: 100%;
  overflow-x : hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
  padding-bottom:5rem;
`

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />
        <Body>
          <Hero />

          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>

          <Projects />

          <Wrapper>
            <Contact />
          </Wrapper>

        </Body>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App



/* <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar />

        <Body>
          <Routes>
            <Route exact='true' path="*" element={<Hero />}></Route>
          </Routes>
          <Wrapper>
            <Routes>
              <Route exact='true' path="/skills" element={<Skills />}></Route>
              <Route exact='true' path="/expreience" element={<Experience />}></Route>
            </Routes>
          </Wrapper>
          <Routes>
            <Route exact='true' path="/projects" element={<Projects />}></Route>
          </Routes>
          <Wrapper>
            <Routes>
              <Route exact='true' path="/contact" element={<Contact />}></Route>
            </Routes>
          </Wrapper>
        </Body>

      </BrowserRouter>
    </ThemeProvider> */