import React from "react";
import Header from "./components/Header";
import SplitText from "../ReactBits/SplitText/SplitText";
import SplashCursor from "../ReactBits/SplashCursor/SplashCursor";
import BlurText from "../ReactBits/BlurText/BlurText";
import { ProjectorIcon } from "lucide-react";
import Projects from "./components/Projects";
import InfiniteMenu from "../ReactBits/InfiniteMenu/InfiniteMenu";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

const App = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="">
      <Header />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
