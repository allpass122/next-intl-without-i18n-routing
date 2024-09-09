'use client';

import { useRouter } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  return (
    <div className="flex gap-2">
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        onClick={() => changeLanguage('en')}
      >
        English
      </button>
      <button
        className="bg-blue-500 text-white px-2 py-1 rounded-md"
        onClick={() => changeLanguage('zh-TW')}
      >
        繁體中文
      </button>
    </div>
  );
};

export default LanguageSwitcher;
