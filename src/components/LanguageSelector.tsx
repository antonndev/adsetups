import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Globe, Check } from 'lucide-react';
import { useLanguageStore } from '../store/language';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
] as const;

export function LanguageSelector() {
  const { current, setLanguage } = useLanguageStore();

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
        <Globe className="w-5 h-5 text-gray-400" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-black/90 backdrop-blur-xl border border-white/10 shadow-lg focus:outline-none">
          <div className="px-1 py-1">
            {languages.map((lang) => (
              <Menu.Item key={lang.code}>
                {({ active }) => (
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`${
                      active ? 'bg-white/10' : ''
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm text-white`}
                  >
                    {current === lang.code && (
                      <Check className="mr-2 h-4 w-4 text-minecraft-blue" />
                    )}
                    <span className={current === lang.code ? 'ml-6' : 'ml-8'}>
                      {lang.label}
                    </span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}