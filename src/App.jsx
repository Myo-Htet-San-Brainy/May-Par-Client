import React, { useState } from "react";
import logo from "./assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const [aiAnswer, setAiAnswer] = useState("");
  return (
    <body className="bg-gradient-to-r from-blue-500 to-pink-500 h-screen">
      <div className=" h-screen pt-20">
        <img
          src={logo}
          alt="logo picture"
          className="rounded-full h-24 w-24 object-cover mx-auto"
        />
        <div className="text-center mt-2">
          <h1 className="font-bold text-white text-4xl uppercase">May Par</h1>
        </div>
        <div className=" mx-auto w-[70%]">
          <div className="text-center mt-1">
            <p className="text-white tracking-wide text-lg ">
              Ask me anything about May Pr.
            </p>
          </div>
          <form action="" className="flex items-center mt-7 gap-x-2 ">
            {/* Input field taking 80% width */}
            <input
              type="text"
              className="flex-grow w-[80%] rounded-lg px-2 py-1  focus:outline-none focus:border-blue-500"
              placeholder="Any Question..."
            />
            {/* Button taking 20% width */}
            <button
              type="submit"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none h-8"
            >
              <div className="flex items-center h-[100%]">Send</div>
            </button>
          </form>
          <div className="h-60 bg-white rounded-lg mt-4 p-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            consequuntur laudantium atque ullam mollitia quod reiciendis,
            quisquam doloremque nisi, natus dolor voluptas! Iure eum voluptatum
            ullam iste beatae. Natus, fugit!
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
