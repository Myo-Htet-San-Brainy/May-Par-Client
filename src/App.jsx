import React, { useState } from "react";
import logo from "./assets/logo.png";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const [aiAnswer, setAiAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  async function sendQuestion(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData(e.target);
      const question = formData.get("question");
      const localApiUrl = "http://localhost:5000/api/v1/aiAnswers";
      const productionApiUrl = "https://may-par-api.onrender.com";
      const res = await axios.post(productionApiUrl, { question });
      console.log(res.data.answer);
      if (res.data.answer === "") {
        throw new Error();
      }
      setAiAnswer(res.data.answer);
      setLoading(false);
      toast.success("success");
      e.target.reset();
    } catch (error) {
      toast.error("Some error happened. Please try again later.");
      setLoading(false);
      e.target.reset();
    }
  }
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
              Ask me anything about Pyan Yaung E-commerce.
            </p>
          </div>
          <form
            onSubmit={sendQuestion}
            className="flex items-center mt-7 gap-x-2 "
          >
            {/* Input field taking 80% width */}
            <input
              type="text"
              name="question"
              className="flex-grow w-[80%] rounded-lg px-2 py-1  focus:outline-none focus:border-blue-500"
              placeholder="Any Question..."
            />
            {/* Button taking 20% width */}
            <button
              type="submit"
              className="bg-orange-400 text-white px-4 py-2 rounded-lg focus:outline-none h-8 hover:bg-white hover:text-orange-400 transition-all"
              disabled={loading}
            >
              <span className="flex items-center h-[100%]">
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zm14-1.5a7.963 7.963 0 01-2 5.291V20c4.418 0 8-3.582 8-8h-4zM20 12a7.963 7.963 0 01-2-5.291V4c4.418 0 8 3.582 8 8h-4z"
                    ></path>
                  </svg>
                ) : (
                  "Send"
                )}
              </span>
            </button>
          </form>
          <div className="h-72 bg-white rounded-lg mt-4 p-7">{aiAnswer}</div>
        </div>
      </div>
    </body>
  );
};

export default App;
