'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
    { code: 'pap', name: 'Papiamento', flag: '🇦🇼' },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLanguageChange = (code: string) => {
        setLanguage(code);
        setIsOpen(false);
    };

    const currentLang = languages.find(l => l.code === language) || languages[0];

    return (
        <div className="relative z-50" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition-colors text-sm text-gray-700 font-medium"
            >
                <Globe className="h-4 w-4" />
                <span className="hidden sm:inline">{currentLang.name}</span>
                <span className="sm:hidden">{currentLang.flag}</span>
                <ChevronDown className="h-3 w-3 opacity-50" />
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center justify-between"
                        >
                            <span className="flex items-center">
                                <span className="mr-2 text-base">{lang.flag}</span>
                                {lang.name}
                            </span>
                            {language === lang.code && <Check className="h-3 w-3 text-blue-600" />}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
