// src/app/page.tsx
export default function RootPage() {
  return (
    <main className="p-6 space-y-4">
      <h1>Welcome! Choose a language:</h1>
      <ul className="list-disc pl-5">
        <li><a href="/en" className="text-blue-500 underline">English</a></li>
        <li><a href="/fr" className="text-blue-500 underline">Français</a></li>
        <li><a href="/es" className="text-blue-500 underline">Español</a></li>
      </ul>
    </main>
  );
}
