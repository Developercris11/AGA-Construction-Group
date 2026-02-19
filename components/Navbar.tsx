'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Facebook, Instagram, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const navigation = [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.about'), href: '/about' },
        { name: t('nav.services'), href: '/services' },
        { name: t('nav.portfolio'), href: '/portfolio' },
        { name: t('nav.contact'), href: '/contact' },
    ];

    return (
        <>
            {/* Top Bar - Social Icons */}
            <div className="bg-yellow-500 text-gray-900 py-2 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto flex justify-end items-center">
                    <div className="flex items-center space-x-4 animate-pulse-scale">
                        <span className="text-xs uppercase tracking-wider font-semibold mr-2 hidden sm:inline-block text-blue-900 drop-shadow-sm">Follow Us:</span>
                        <a href="#" className="text-blue-900 hover:text-white transition-colors drop-shadow-sm"><Facebook className="h-4 w-4" /></a>
                        <a href="#" className="text-blue-900 hover:text-white transition-colors drop-shadow-sm"><Instagram className="h-4 w-4" /></a>
                        <a href="#" className="text-blue-900 hover:text-white transition-colors drop-shadow-sm"><Youtube className="h-4 w-4" /></a>
                    </div>
                </div>
            </div>

            <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors border-b border-transparent dark:border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-32">
                        <div className="flex items-center">
                            <Link href="/" className="flex-shrink-0 flex items-center">
                                <Image
                                    src="/logo-new.png"
                                    alt="AGA Construction Group"
                                    width={400}
                                    height={120}
                                    className="h-28 w-auto mr-2"
                                    priority
                                />
                            </Link>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.href} // Key should be href as name changes with lang
                                    href={item.href}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="ml-4">
                                <LanguageSwitcher />
                            </div>
                            <Link
                                href="/quote"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                            >
                                {t('nav.quote')}
                            </Link>
                        </div>

                        <div className="flex items-center md:hidden">
                            <div className="mr-4">
                                <LanguageSwitcher />
                            </div>
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            href="/quote"
                            className="block w-full text-center mt-4 bg-blue-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-blue-700"
                            onClick={() => setIsOpen(false)}
                        >
                            {t('nav.quote')}
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}
