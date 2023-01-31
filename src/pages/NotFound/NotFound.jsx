import React from 'react'
import "./NotFound.css"
const NotFound=()=> {
  return (
    <>
        <main className="bl_page404">
    <h1>Error 404. The page does not exist</h1>

    <div className="bl_page404__wrapper">
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