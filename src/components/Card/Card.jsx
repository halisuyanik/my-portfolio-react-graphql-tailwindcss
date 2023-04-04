import React, { useEffect, useState, useContext, useRef } from "react";
import "./Card.css";
import HiChevronRight from "@iconscout/react-unicons/icons/uil-angle-right";
import { themeContext } from "../../context/ThemeContext";
import ScrollReveal from 'scrollreveal';
const Card = ({ title, id, description, source, tags, language }) => {
  const boxRef = useRef(null);
  const { darkMode, dispatch } = useContext(themeContext);
  useEffect(() => {
    const config = {
      origin: 'bottom',
      duration: 1000,
      delay: 500,
      distance: '100px',
      easing: 'ease-out',
      reset: false,
    };
    ScrollReveal().reveal(boxRef.current, config);
  }, [])
  
  return (
    <div  ref={boxRef} key={id} className="p-4 lg:w-1/3 ">
      <div class="max-w-3xl mx-auto my-10 ">
        <div class="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
          <span class="w-3 h-3 rounded-full bg-red-400"></span>
          <span class="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span class="w-3 h-3 rounded-full bg-green-400"></span>
        </div>
        <div
          style={{ opacity: darkMode ? "0.75" : "1" }}
          className=" h-full  bg-gray-700 px-8 pt-8 pb-24 rounded-b-lg overflow-hidden text-center relative"
        >
          <h2 className="tracking-widest text-xs title-font font-medium bg-blue-100 dark:bg-[#d6bcfa29] rounded-full inline-block px-4 py-1 text-purple-300 mb-1">
            {!language ? null : language}
          </h2>
          <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3">
            {!title ? null : title}
          </h1>
          <p className="leading-relaxed mb-3 dark:text-zinc-400">
            {!description
              ? "This project doesn't have a description"
              : description}
          </p>
          <a
            style={{ cursor: "none" }}
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-white inline-flex items-center"
          >
            <span> View details </span>
            <span>
              <HiChevronRight></HiChevronRight>
            </span>
          </a>

          <div
            className=" mt-3 space-x-1.5
 grid grid-cols-2 gap-2  "
          >
            {tags?.map((tag, key) => (
              <div key={key} className="row  justify-center">
                <span className="badge bg-gray-900  text-white">
                  {!tag ? null : tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
