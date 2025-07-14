"use client"
import Ai from "./components/Ai";
import Hero from "./components/Hero";
import MarqueeIcons from "./components/MarqueeIcons";
import MyServices from "./components/MyServices";
import Projects from "./components/Projects";
//import News from "./components/News";

export default function Home() {
  return (
    <>  
      <Hero />
      <MarqueeIcons />  
      <Ai/>  
      <MyServices />
      <Projects />
      {/* <News /> */} 
    </>
  );
}
