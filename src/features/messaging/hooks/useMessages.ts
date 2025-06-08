import { useState } from 'react';

export interface Message {
  id: number;
  text: string;
}

export function useMessages() {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (text: string) => {
    setMessages((prev) => [...prev, { id: Date.now(), text }]);
  };

  return { messages, addMessage };
}
