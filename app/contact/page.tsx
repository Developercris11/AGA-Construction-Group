'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('contact_page.title')}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('contact_page.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact_page.get_in_touch')}</h2>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('contact_page.phone.title')}</h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-300">{t('contact_page.phone.value')}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact_page.phone.availability')}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('contact_page.email.title')}</h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-300">{t('contact_page.email.value')}</p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t('contact_page.location.title')}</h3>
                                <p className="mt-1 text-gray-600 dark:text-gray-300">{t('contact_page.location.value')}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{t('contact_page.location.serving')}</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a
                                href="https://wa.me/2975555555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600 w-full justify-center md:w-auto transition-colors"
                            >
                                {t('contact_page.whatsapp_button')}
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder or Embed */}
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden h-96 shadow-md relative">
                        {/* Replace with actual Google Maps Embed iframe */}
                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31191.077651084205!2d-70.0558!3d12.5246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8538a7c5c0c6d5%3A0xc39f8f4a1b0b5e4!2sOranjestad%2C%20Aruba!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
