import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Welcome</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/auth/login" className="text-blue-600 underline">
            Login
          </Link>
        </li>
        <li>
          <Link href="/messages" className="text-blue-600 underline">
            Messages
          </Link>
        </li>
      </ul>
    </main>
  );
}
