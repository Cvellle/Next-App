'use client';

import { useEffect } from 'react';

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-6 text-red-600">
      <h2 className="text-2xl font-bold">Something went wrong (root)</h2>
      <pre>{error.message}</pre>
      <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-gray-200 rounded">
        Try again
      </button>
    </div>
  );
}
