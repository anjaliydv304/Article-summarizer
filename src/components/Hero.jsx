import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
      <div flex items-center>
      <img src={logo} alt='snip_logo' className='w-20 object-contain' />
      <h1 className="text-center font-mono font-extrabold text-2xl  text-slate-700">Snip</h1>
      </div>
       
        

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/anjaliydv304", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Generate Article Summaries with  <br className='max-md:hidden' />
        <span className='red_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Streamline your reading with Snip, an open-source tool that converts long articles into brief, easy-to-read summaries.
      </h2>
    </header>
  );
};

export default Hero;
