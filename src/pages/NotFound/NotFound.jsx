import React from 'react'
import "./NotFound.css"
import { Helmet } from "react-helmet";
const NotFound=()=> {
  return (
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Halis Uyanık/404</title>
        <link rel="canonical" href="http://halisuyanik.dev" />
      </Helmet>
        <main className="bl_page404 " >
          <div className='flex justify-center'>
          <p>Error 404. The page does not exist</p>
             </div>
    

    <div className="bl_page404__wrapper flex flex-wrap md:items-center ">
        <img src="https://github.com/halisuyanik/my-portfolio-react-graphql-tailwindcss/blob/main/public/cloud_warmcasino.png?raw=true" alt="cloud_warmcasino.png"/>
        <div className="bl_page404__el1"></div>
        <div className="bl_page404__el2"></div>
        <div className="bl_page404__el3"></div>
        <a className="bl_page404__link" style={{cursor:"none"}} href="/">go home</a>
    </div>
    </main>
    </>
  )
}
export default NotFound;