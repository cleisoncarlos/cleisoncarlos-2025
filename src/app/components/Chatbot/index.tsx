'use client';
// import { Bubble } from "@typebot.io/nextjs";

// const Chatbot = () => {
//   return (
//     <Bubble
//       typebot="br-cleisoncarlos-com"
//       previewMessage={{
//         message: "Como posso te ajudar?",
//         autoShowDelay: 2000,
//         avatarUrl:
//           "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7Ka3dFVZHkCbRSFCPJiaEc75jcAqGCgh2A&s",
//       }}
//       theme={{ button: { backgroundColor: "#128c7e", size: "large" } }}
//     />
//   );
// };

// export default Chatbot

// app/components/TypebotBubble.tsx
"use client";

import { useEffect } from "react";

export default function TypebotBubble() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.innerHTML = `
      import Typebot from "https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js";

      Typebot.initBubble({
        typebot: "br-cleisoncarlos-com", // slug do seu bot
        theme: {
          button: {
            backgroundColor: "#007bff", // cor do botão
            iconColor: "#ffffff",       // cor do ícone
            size: "medium",             // small | medium | large
            position: "bottom-right"    // bottom-right | bottom-left
          }
        }
      });
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // bolha é renderizada automaticamente
}

