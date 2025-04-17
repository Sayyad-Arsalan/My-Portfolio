/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Hero from './miniComponents/Hero'
import Timeline from './miniComponents/Timeline'
import About from './miniComponents/About'
import Skills from './miniComponents/Skills'
import Portfolio from './miniComponents/Portfolio'
import MyApps from './miniComponents/MyApps'
import Contact from './miniComponents/Contact'


const Home = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Please wait... Data is loading...");

  const handleHeroLoad = () => {
    setHeroLoaded(true);
  };

  useEffect(() => {
    let intervalId;

    if (!heroLoaded) {
      const messages = [
        "Please wait... Data is loading...",
        "Still working on it... Just a moment!",
        "This is taking longer than expected ⏳",
        "Okay, now I'm kinda worried... 😅",
        "Maybe go grab a coffee? ☕",
        "Is the internet okay? 🙃",
      ];

      let index = 0;

      intervalId = setInterval(() => {
        index++;
        if (index < messages.length) {
          setLoadingMessage(messages[index]);
        } else {
          clearInterval(intervalId);
        }
      }, 2000); // Change message every 2s
    }

    return () => clearInterval(intervalId);
  }, [heroLoaded]);

  return (
    <>
    {/* Loader overlay */}
    {!heroLoaded && (
        <div className="h-screen flex justify-center items-center text-2xl sm:text-3xl font-semibold fixed top-0 left-0 w-full bg-black text-white z-50 text-center px-4">
          {loadingMessage}
        </div>
      )}

    {/* Hide content until Hero is loaded */}
    <article className={`transition-opacity duration-300 ${heroLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'} px-5 mt-10 sm:mt-14 md:mt-16 lg:mt-24 xl:mt-32 sm:mx-auto w-full max-w-[1050px] flex flex-col gap-14`}>
      <Hero onLoad={handleHeroLoad} />
      <Timeline />
      <About />
      <Skills />
      <Portfolio />
      <MyApps />
      <Contact />
    </article>
  </>
  )
}

export default Home
