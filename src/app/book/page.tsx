import { getTranslations } from 'next-intl/server';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh-TW' }]; // 添加你支持的所有语言
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'book' });

  return {
    title: t('title'),
  };
}

export default async function BookPage() {
  const t = await getTranslations('book');

  return <div className="p-4">{t('title')}</div>;
}
