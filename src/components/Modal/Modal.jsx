import React from "react";


import useSound from 'use-sound';

import soundUrl from "./StarWars.mp3"

const Modal = ({ setShowModal }) => {
  
  const [play, { stop }] = useSound(
    soundUrl,
    { volume: 0.5 }
  );

  const [isHovering, setIsHovering] = React.useState(
    false
  );

    return (
      <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
          
            {/*header*/}
            <div className="flex items-start justify-between p-5  rounded-t">
              
              <img src="https://github.com/halisuyanik/my-portfolio-react-graphql-tailwindcss/blob/main/public/darthVader.gif?raw=true"
            
            onMouseEnter={() => {
              setIsHovering(true);
              play();
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              stop();
            }}
            
            isHovering={isHovering}
            ></img>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto ml-5">
            <h1>hover over the picture</h1>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6  rounded-b">
              <button
                className="text-red-500 background-transparent  font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
    );
};

export default Modal;