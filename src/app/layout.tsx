import LanguageSwitcher from '@/components/LanguageSwitcher';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="bg-white text-black">
        <NextIntlClientProvider messages={messages}>
          <div className="p-4 bg-sky-200 flex justify-between items-center">
            <a className="mr-4 text-3xl font-bold" href="/">
              This is header
            </a>
            <LanguageSwitcher />
          </div>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
