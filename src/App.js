import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

// import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Works from "./pages/Works";

import { useContext } from "react";
import { themeContext } from "./Context";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimatedCursor from "react-animated-cursor";
import { Helmet } from "react-helmet";
import NotFound from "./pages/NotFound/NotFound.jsx";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Halis Uyanik</title>
        <link rel="canonical" href="http://halisuyanik.dev" />
      </Helmet>
      <div
        className="App"
        style={{
          background: darkMode ? "#101726" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <AnimatedCursor
          innerSize={8}
          outerSize={8}
          color="66, 184, 131"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
          ]}
        />
        <div className="exbody">
          <BrowserRouter>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Intro />} />
              <Route path="/Works" element={<Works />} />
              <Route path='*' element={<NotFound></NotFound>}/>
            </Routes>
            <Footer></Footer>
          </BrowserRouter>
          
        </div>
      </div>
    </>
  );
}

export default App;
