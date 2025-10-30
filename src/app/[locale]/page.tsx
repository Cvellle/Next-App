import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HomePage() {
 

  return (
    <main className="p-6 space-y-4">
      asd
      {/* <h1 className="text-3xl font-bold">{t('title')} ({locale})</h1>
      <ul className="list-disc pl-5">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/${locale}/posts/${post.slug}`} className="text-blue-500 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href={`/${locale}/posts/hello-world`} className="text-green-500 underline">
          {t('postsLink')}
        </Link>
      </p> */}
    </main>
  );
}
