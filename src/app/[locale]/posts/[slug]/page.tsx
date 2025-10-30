import Link from 'next/link';
import { useTranslations } from 'next-intl';

export async function generateStaticParams() {
  const locales = ['en', 'fr', 'es'];
  const slugs = ['hello-world', 'nextjs-tips'];

  return locales.flatMap(locale =>
    slugs.map(slug => ({ locale, slug }))
  );
}

export default function PostPage({ params }: { params: { locale: string; slug: string } }) {
  const t = useTranslations('Post');
  const { locale, slug } = params;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">{t('title')}</h1>
      <p><strong>Locale:</strong> {locale}</p>
      <p><strong>Slug:</strong> {slug}</p>
      <Link href={`/${locale}`} className="text-blue-500 hover:underline">
        {t('back')}
      </Link>
    </main>
  );
}
