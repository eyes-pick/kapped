'use client';

import { useState } from 'react';
import { useMessages } from '../hooks/useMessages';

export default function MessageList() {
  const { messages, addMessage } = useMessages();
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    addMessage(input.trim());
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          className="border px-2 py-1 rounded flex-1"
        />
        <button type="submit" className="px-2 py-1 border rounded">
          Send
        </button>
      </form>
      <ul className="space-y-2">
        {messages.map((m) => (
          <li key={m.id} className="border-b pb-1">
            {m.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
