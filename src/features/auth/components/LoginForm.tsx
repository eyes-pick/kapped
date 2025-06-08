'use client';

import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function LoginForm() {
  const { user, login } = useAuth();
  const [name, setName] = useState('');

  if (user) {
    return <p>Welcome, {user}!</p>;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(name);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Username"
        className="border px-2 py-1 rounded"
      />
      <button type="submit" className="px-2 py-1 border rounded">
        Login
      </button>
    </form>
  );
}
