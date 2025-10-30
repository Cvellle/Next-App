import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    console.log(123, 'messages');
    messages = (await import(`../../messages/${locale}.json`)).default;
    console.log(123, messages);
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="p-6 bg-gray-50 text-gray-900">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
