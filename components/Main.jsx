import React from "react";
import Hero from "./Hero";
import LiveChannels from "./LiveChannels";

const Main = () => {
  return (
    <div className="absolute left-[65px] xl:left-[240px]">
      <Hero />
      <LiveChannels />
    </div>
  );
};

export default Main;
