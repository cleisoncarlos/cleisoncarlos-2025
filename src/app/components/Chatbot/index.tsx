'use client';


import { Bubble } from '@typebot.io/react'

const Chatbot = () => {
  return (
    <Bubble
      typebot="br-cleisoncarlos-com"
      previewMessage={{
        message: "Como posso te ajudar?",
        autoShowDelay: 2000,
        avatarUrl: 'https://avatars.githubusercontent.com/u/16015833?v=4',

      }}
      theme={{
        button: { backgroundColor: '#af1010ff', size: 'large' },

      }}
    />
  )
}


export default Chatbot;



