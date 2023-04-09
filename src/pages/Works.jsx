import React, { useEffect, useState, useContext, useRef } from "react";

import "./Works.css";
import { themeContext } from "../context/ThemeContext";

import Loading from "../Loading";

import { Helmet } from "react-helmet";

import LoadingBar from "react-top-loading-bar";
import Card from "../components/Card/Card";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Works = () => {
  const transition = { duration: 2, type: "spring" };

  const { darkMode, dispatch } = useContext(themeContext);

  const [projects, setProjects] = useState(null);

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

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
        }
      );
      const json = await data.json();
      if (json.data.projects != null) {
        await delay(500);
        setProjects(json.data.projects);
        setLoading(false);
        setProgress(100);
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
      <LoadingBar
        color="#42b883"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {loading ? (
        <div className="min-h-screen">{loading && <Loading></Loading>}</div>
      ) : (
        <div className="portfolio flex flex-col mb-12 ">
          {/* heading */}
          <section className="text-gray-600 ">
            <div className="container px-5 py-15 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center sm:jutify-start ">
                {projects &&
                  projects?.map(
                    ({ title, id, description, source, tags, language }) => (
                      <Card
                        id={id}
                        title={title}
                        description={description}
                        source={source}
                        tags={tags}
                        language={language}
                      ></Card>
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
