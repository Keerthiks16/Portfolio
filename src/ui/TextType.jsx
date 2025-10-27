// TypingEffect.jsx
import React from "react";
import TextType from "./TextType";

const TypingEffect = ({
  text = ["Text typing effect", "for your websites", "Happy coding!"],
  typingSpeed = 75,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "|",
  className = "",
}) => {
  return (
    <div className={`w-full text-center ${className}`}>
      <TextType
        text={text}
        typingSpeed={typingSpeed}
        pauseDuration={pauseDuration}
        showCursor={showCursor}
        cursorCharacter={cursorCharacter}
      />
    </div>
  );
};

export default TypingEffect;
