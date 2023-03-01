import React, { useContext, useState } from "react";
import "./Intro.css";

import Github from "@iconscout/react-unicons/icons/uil-github";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

import { TypeAnimation } from "react-type-animation";
import { themeContext } from "../../context/ThemeContext";
import { Link } from "react-scroll";

import { Helmet } from "react-helmet";

const Intro = () => {
  
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const { state, dispatch } = useContext(themeContext);


  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Halis Uyanik</title>
        <link rel="canonical" href="http://halisuyanik.dev" />
      </Helmet>
    <div className="Intro" id="Intro ">
    

      {/* left name side */}
      <div className="i-left ml-4">
        <div className="i-name ">
       
          {/* yahan change hy darkmode ka */}
          <span style={{ color: state.darkMode ? "white" : "", fontSize: "2em" }}>
            Hello, I'm 👋
          </span>
          <span>Halis</span>
          <p></p>
          <span style={{ color: state.darkMode ? "white" : "", fontSize: "1.4em" }}>
            a Software Developer working in Ankara, Turkey.
            
          </span>
          <span style={{ color: state.darkMode ? "gray" : "gray", fontSize: "1em" }}>
           I'm creating something for web and backend architecture.
        <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={["", 100]}
              speed={60} // Custom Speed from 1-99 - Default Speed: 40
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            /></span>
          
        </div>
        
        <Link to="contact" smooth={true} spy={true}></Link>
        {/* social icons */}
        <div className="i-icons">
          <a target="blank" href="https://github.com/halisuyanik">
            <Github color={state.darkMode ? "white" : "var(--black)"} size={"3rem"} />
          </a>
          <a target="blank" href="https://www.linkedin.com/in/halis-uyan%C4%B1k-a62896171/">
            <Linkedin color={state.darkMode ? "white" : "var(--black)"} size={"3rem"} />
          </a>
          <a target="blank" href="https://twitter.com/jalletbtw">
            <Twitter color={state.darkMode ? "white" : "var(--black)"} size={"3rem"} />
          </a>

            
        </div>
      </div>

      {/* right image side */}
      <div className="i-right">
        {/* floatinDiv mein change hy dark mode ka */}
        <article className="prose ml-4 md:mt-1 md:prose-lg flex flex-wrap dark:prose-dark">
          <div>
            <pre>
              
              <code className="language-js">
                
                <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                  <span>// Portfolio.jsx </span>
                </div>
                <p className="text-gray-500">
                  <span className="text-gray-500">//</span>{" "}
                  <span className="text-gray-500">Todo: </span>
                  'Develop your lousy design talent.'
                </p>

                <div className="flex flex-wrap md:items-center md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <p className="text-sm">
                      <span className="text-pink-500">
                        <span className="w-10 h-10 rounded-full"></span>{" "}
                      </span>
                      <span className="text-purple-300">const </span>
                      <span className="text-yellow-300">techWeb</span>
                      <span className="font-bold"></span> ={" "}
                      <span className="text-purple-300">[</span>
                      <span className="text-yellow-400">
                        "Reactjs", "Nextjs", "Angular", "Vuejs", "MongoDB", "Graphql",
                        "Nodejs"
                      </span>
                      <span className="text-purple-300">]</span>;{" "}
                    </p>
                    <p className="text-sm">
                      <span className="text-pink-500">
                        <span className="w-10 h-10 rounded-full"></span>{" "}
                      </span>
                      <span className="text-purple-300">const </span>
                      <span className="text-yellow-300">language</span>
                      <span className="font-bold text-pink-300"></span> ={" "}
                      <span className="text-yellow-400">
                        <TypeAnimation
                          // Same String at the start will only be typed once, initially
                          sequence={[
                            '"Python";',
                            1000,
                            '"C#";',
                            1000,
                            '"Java";',
                            1000,
                            '".Net";',
                            1000,
                            '"Asp.Net";',
                            1000,
                            '"PHP";',
                            1000,
                          ]}
                          speed={50} // Custom Speed from 1-99 - Default Speed: 40
                          style={{ fontSize: "1em" }}
                          wrapper="span" // Animation will be rendered as a <span>
                          repeat={Infinity} // Repeat this Animation Sequence infinitely
                        />
                        </span>
                </p>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex justify-start md:justify-start">
                  <a
                    target="_blank"
                    href="https://github.com/halisuyanik"
                    className="text-purple-300 transition duration-300 text-center md:text-left"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </code>
          
        </pre> 
        
      </div>
    </article>
        
       


        

        
        
      </div>
      
    </div>
    <div className="moon" />
    </>
  );
};

export default Intro;
