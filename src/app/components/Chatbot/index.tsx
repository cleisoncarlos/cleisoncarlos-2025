'use client';
import { Bubble } from "@typebot.io/react";

export default function Chatbot() {
  return (
    <Bubble
      typebot="cleisoncarlos"
      apiHost="https://typebot.io"
      previewMessage={{
        message: "Olá, posso ajudá-lo ?",
        autoShowDelay: 1000,
        avatarUrl:
          "https://s3.typebot.io/public/workspaces/clwao4uvk000g11e452444lj8/typebots/cmdn35nei000ll104c592ra7p/bubble-icon?v=1753710757860",
      }}
      theme={{
        button: {
          backgroundColor: "#1D1D1D",
          customIconSrc:
            "https://s3.typebot.io/public/workspaces/clwao4uvk000g11e452444lj8/typebots/cmdn35nei000ll104c592ra7p/bubble-icon?v=1753710757860",
        },
      }}
    />
  )
}
