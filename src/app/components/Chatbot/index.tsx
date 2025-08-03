'use client';

'use client';

import { Typebot } from '@typebot.io/react';

const Chatbot = () => {
  return (
    <Typebot
      typebot="br-cleisoncarlos-com"
      customBaseUrl="https://chatbot.cleisoncarlos.com"
      style={{ width: '100%', height: '600px' }}
    />
  );
};

export default Chatbot;


