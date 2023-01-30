import React,{useContext} from "react";
import "./Footer.css";
import { themeContext } from "../../Context";
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      {/* <svg classNameName="w-100 relative text-blue-50 dark:text-blue-900/10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 240" fill="currentColor"><path fill-opacity="1" d="M0,160L21.8,170.7C43.6,181,87,203,131,197.3C174.5,192,218,160,262,133.3C305.5,107,349,85,393,74.7C436.4,64,480,64,524,80C567.3,96,611,128,655,122.7C698.2,117,742,75,785,74.7C829.1,75,873,117,916,133.3C960,149,1004,139,1047,128C1090.9,117,1135,107,1178,106.7C1221.8,107,1265,117,1309,117.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg> */}
      <footer id="page-footer" style={{margin: "-0.5rem -3.5rem"}}>
        <div className=" ">
          <svg
            className="w-100 relative text-blue-50 dark:text-blue-900/10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 240"
            fill="currentColor"
          >
            <path
              fill-opacity="1"
              d="M0,160L21.8,170.7C43.6,181,87,203,131,197.3C174.5,192,218,160,262,133.3C305.5,107,349,85,393,74.7C436.4,64,480,64,524,80C567.3,96,611,128,655,122.7C698.2,117,742,75,785,74.7C829.1,75,873,117,916,133.3C960,149,1004,139,1047,128C1090.9,117,1135,107,1178,106.7C1221.8,107,1265,117,1309,117.3C1352.7,117,1396,107,1418,101.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/10">
          <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl pb-10 text-center text-gray-600 lg:pb-20">
            <div>

            </div>
            <nav className="space-x-3 py-12 sm:space-x-6 ">
            </nav>
            <p className="mb-2 font-bold text-gray-600 dark:text-gray-400 ">
            {" "}
            <a href="mailto:halisuyanik@outlook.com" className="underline underline-offset-2 font-semibold dark:text-zinc-300" style={{color: darkMode?"#CAD4D8":"#343434 ", cursor:"none"} }>Send me an email </a>
            
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
