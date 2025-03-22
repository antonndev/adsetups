import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Language = 'en' | 'es' | 'fr' | 'de';

interface LanguageState {
  current: Language;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      current: 'en',
      setLanguage: (lang) => set({ current: lang }),
    }),
    {
      name: 'language-storage',
    }
  )
);