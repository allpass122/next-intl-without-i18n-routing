import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.

  const cookieStore = cookies();
  const languageCookie = cookieStore.get('NEXT_LOCALE');

  const selectedLocale = languageCookie?.value || 'en';

  return {
    locale: selectedLocale,
    messages: (await import(`../../messages/${selectedLocale}.json`)).default,
  };
});
