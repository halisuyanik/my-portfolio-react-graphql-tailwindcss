import React, { useEffect, useState, useContext } from "react";

import "./Works.css";
import HiChevronRight from "@iconscout/react-unicons/icons/uil-angle-right";
import {themeContext} from "../context/ThemeContext"

import Loading from "../Loading";

import { Helmet } from "react-helmet";

import LoadingBar from 'react-top-loading-bar'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Works = () => {
  const transition = { duration: 2, type: "spring" };

  const { darkMode, dispatch } = useContext(themeContext);

  const [projects, setProjects] = useState(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)

  const query = `query{
    projects {
      title
      id
      tags
      image {
        url
      }
      source
      language
      description
    }
  }`;

  useEffect(() => {
    const getProjects = async () => {
      const data = await fetch(`"${process.env.GRAPH_API_KEY}"`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      const json = await data.json();
      if (json.data.projects != null) {
        await delay(500);
        setProjects(json.data.projects);
        setLoading(false);
        setProgress(100)
      }
    };

    getProjects();
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Halis Uyanik/Works</title>
        <link rel="canonical" href="http://halisuyanik.dev/works" />
      </Helmet>
      <LoadingBar color="#42b883" progress={progress} onLoaderFinished={() => setProgress(0)} />
      {loading ? (
        <div className="min-h-screen">{loading && <Loading></Loading>}</div>
      ) : (
        <div className="portfolio flex flex-col mb-12 ">
          {/* heading */}

          <section className="text-gray-600 ">
            <div className="container px-5 py-15 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center sm:jutify-start projectCard">
                {projects &&
                  projects?.map(
                    ({ title, id, description, source, tags, language }) => (
                      <div key={id} className="p-4 lg:w-1/3 pcard">
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
                            <a style={{cursor:"none"}}
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
                    )
                  )}
              </div>
            </div>
          </section>

          {/* slider */}
        </div>
      )}
      <div className="moon" />
    </>
  );
};

export default Works;
