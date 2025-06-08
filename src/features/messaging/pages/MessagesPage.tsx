'use client';

import MessageList from '../components/MessageList';

export default function MessagesPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">Messages</h1>
      <MessageList />
    </main>
  );
}
