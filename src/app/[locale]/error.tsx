'use client';

import { useEffect } from 'react';

export default function LocaleError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 text-red-600">
      <h2 className="text-2xl font-bold">Something went wrong</h2>
      <pre className="mt-2">{error.message}</pre>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        Try again
      </button>
    </div>
  );
}
