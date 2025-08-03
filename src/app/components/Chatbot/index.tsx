'use client';


import { Bubble } from '@typebot.io/react'

const Chatbot = () => {
  return (
    <Bubble
      typebot="https://chatbot.cleisoncarlos.com/br-cleisoncarlos-com"
      previewMessage={{
        message: "Como posso te ajudar?",
        autoShowDelay: 2000,
        avatarUrl: 'https://static.vecteezy.com/system/resources/previews/034/211/480/non_2x/ai-chatbots-icon-illustration-vector.jpg',

      }}
      theme={{
        button: { backgroundColor: '#af1010ff', size: 'large' },

      }}
    />
  )
}


export default Chatbot;



