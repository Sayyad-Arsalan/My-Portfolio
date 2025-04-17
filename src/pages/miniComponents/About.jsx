import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const getMyProfile = async () => {
      const { data } = await axios.get(
        "https://mern-portfolio-backend-ng23.onrender.com/api/v1/user/me/portfolio",
        { withCredentials: true }
      );
      setUser(data.user);
    };
    getMyProfile();
  }, []);
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 item-center text-[2rem] sm:text-[2.75rem] lg:text-[3.8rem]
         leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold"
          style={{ background: "hsl(222.2 84% 4.9%" }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src={user.avatar && user.avatar.url}
              alt={user.fullName}
              className="bg-white p-2 sm:p-4 rotate-[5deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              Welcome to my portfolio! I am Arsalan, a dedicated and
              enthusiastic web developer with a strong passion for app
              development. As a fresher in the industry, I am actively seeking
              opportunities to leverage my skills and contribute to innovative
              projects. My journey in web development is fueled by an insatiable
              curiosity and a commitment to mastering new technologies.
            </p>
            <p>
              What sets me apart is my unwavering dedication to continuous
              learning and skill enhancement. I live by the principles &quot;Never
              stop learning&quot; and &quot;Everything you learn will earn you something,&quot;
              which drive me to quickly grasp new concepts and continuously
              expand my expertise. Whether it&apos;s staying updated with the latest
              industry trends or diving into challenging projects, I approach
              every opportunity with a proactive mindset and a relentless
              pursuit of excellence.{" "}
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          I am confident that my passion for continuous improvement, combined
          with my technical skills, will enable me to make a positive impact in
          any dynamic work environment. I am eager to channel my energy and
          enthusiasm into a challenging and rewarding role where I can
          contribute to innovative solutions. Thank you for visiting my
          portfolio, and I look forward to the possibility of collaborating with
          you on exciting projects.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
