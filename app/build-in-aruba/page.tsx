'use client';

import { useLanguage } from '@/context/LanguageContext';
import { Home, Hammer, Building, Users } from 'lucide-react';
import Image from 'next/image';

export default function BuildInAruba() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-gray-900 transition-colors">
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
                {/* Optional: Add background image here */}
                <div className="relative max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('build_in_aruba.title')}</h1>
                    <p className="text-xl max-w-3xl mx-auto text-blue-100">
                        {t('build_in_aruba.subtitle')}
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            {t('build_in_aruba.title')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('build_in_aruba.content_p1')}
                        </p>

                        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                                <Users className="h-6 w-6 text-blue-600 mr-2" />
                                {t('build_in_aruba.work_with_title')}
                            </h3>
                            <ul className="space-y-3">
                                {(t('build_in_aruba.work_with_list', { returnObjects: true }) as string[]).map((item, index) => (
                                    <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                                        <span className="h-6 flex items-center text-green-500 mr-2">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 leading-relaxed">
                            {t('build_in_aruba.content_p2')}
                        </p>
                    </div>

                    <div className="bg-gray-200 dark:bg-gray-800 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden shadow-xl">
                        {/* Placeholder for construction image */}
                        <div className="text-center p-8">
                            <Building className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 font-medium">Construction in Progress</p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">(Add project image here)</p>
                        </div>
                    </div>
                </div>

                {/* Key Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Home className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Local Construction Expertise</h3>
                        <p className="text-gray-600 dark:text-gray-400">Deep knowledge of Aruba's building regulations, permits, and construction standards.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Hammer className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Quality Materials</h3>
                        <p className="text-gray-600 dark:text-gray-400">Sourcing the best materials suitable for Aruba's tropical and coastal climate conditions.</p>
                    </div>
                    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 text-center">
                        <div className="w-12 h-12 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multilingual Team</h3>
                        <p className="text-gray-600 dark:text-gray-400">We speak English, Spanish, Dutch, and Papiamento to ensure clear communication with all clients.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <a
                        href="/quote"
                        className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg"
                    >
                        Start Building in Aruba
                    </a>
                </div>
            </div>
        </div>
    );
}
