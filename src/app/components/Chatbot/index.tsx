'use client';
import { Bubble } from "@typebot.io/nextjs";

const Chatbot = () => {
  return (
    <Bubble
      typebot="br-cleisoncarlos-com"
      previewMessage={{
        message: "Como posso te ajudar?",
        autoShowDelay: 2000,
        avatarUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7Ka3dFVZHkCbRSFCPJiaEc75jcAqGCgh2A&s",
      }}
      theme={{ button: { backgroundColor: "#128c7e", size: "large" } }}
    />
  );
};

export default Chatbot
