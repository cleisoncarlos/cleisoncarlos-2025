'use client';

import { Bubble } from '@typebot.io/react';

const Chatbot = () => {
  return (
    <Bubble
      typebot="br-cleisoncarlos-com"
      customBaseUrl="https://chatbot.cleisoncarlos.com" // 👈 Define sua instância self-hosted!
      previewMessage={{
        message: "Como posso te ajudar?",
        autoShowDelay: 2000,
        avatarUrl: 'https://static.vecteezy.com/system/resources/previews/034/211/480/non_2x/ai-chatbots-icon-illustration-vector.jpg',
      }}
      theme={{
        button: { backgroundColor: '#af1010ff', size: 'large' },
      }}
      prefilledVariables={{
        'Current URL': 'https://br.cleisoncarlos.com',
        'User name': 'John Doe',
      }}
    />
  );
};


export default Chatbot;



