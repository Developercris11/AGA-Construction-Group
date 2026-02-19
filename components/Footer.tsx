'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-xl font-bold mb-4">AGA Construction Group</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.quick_links')}</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white transition-colors">{t('nav.services')}</Link></li>
                            <li><Link href="/portfolio" className="text-gray-400 hover:text-white transition-colors">{t('nav.portfolio')}</Link></li>
                            <li><Link href="/quote" className="text-gray-400 hover:text-white transition-colors">{t('nav.quote')}</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">{t('nav.contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.contact_us')}</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li className="flex items-start">
                                <span className="font-medium mr-2">{t('footer.location')}</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-medium mr-2">{t('footer.email')}</span>
                            </li>
                            <li className="flex items-center">
                                <span className="font-medium mr-2">{t('footer.phone')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('footer.follow_us')}</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram className="h-6 w-6" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="h-6 w-6" /></a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} AGA Construction Group. {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
