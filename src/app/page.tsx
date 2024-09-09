import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function HomePage() {
  const t = useTranslations('homepage');
  return (
    <div className="p-4">
      <h1>{t('title')}</h1>
      <Link className="text-blue-500 underline" href="/book">
        Book
      </Link>
    </div>
  );
}
