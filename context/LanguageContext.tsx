'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';
import nl from '../locales/nl.json';
import pap from '../locales/pap.json';

// Type definitions for the translations matches the structure of en.json
type Translations = typeof en;

const locales: Record<string, Translations> = {
    en,
    es,
    nl,
    pap,
};

type LanguageContextType = {
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string, options?: { returnObjects?: boolean }) => any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState('en');
    const [translations, setTranslations] = useState<Translations>(en);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Load persisted language from localStorage
        const savedLang = localStorage.getItem('app-language');
        if (savedLang && locales[savedLang]) {
            setLanguage(savedLang);
            setTranslations(locales[savedLang]);
        }
        setIsLoaded(true);
    }, []);

    const changeLanguage = (lang: string) => {
        if (locales[lang]) {
            setLanguage(lang);
            setTranslations(locales[lang]);
            localStorage.setItem('app-language', lang);
        }
    };

    type TranslationOptions = {
        returnObjects?: boolean;
    };

    // Helper function to get nested values, e.g. "hero.title"
    const t = (path: string, options?: TranslationOptions): any => {
        const keys = path.split('.');
        let current: any = translations;

        for (const key of keys) {
            if (current[key] === undefined) {
                console.warn(`Translation key not found: ${path} for language ${language}`);
                return path; // Fallback to key
            }
            current = current[key];
        }

        return current;
    };

    // if (!isLoaded) {
    //     return null; 
    // }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
