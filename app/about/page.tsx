'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function About() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('about_page.title')}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('about_page.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('about_page.story.title')}</h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {t('about_page.story.p1')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {t('about_page.story.p2')}
                        </p>
                    </div>
                    <div className="bg-gray-200 dark:bg-gray-800 h-64 rounded-lg flex items-center justify-center">
                        {/* Placeholder for About Image */}
                        <span className="text-gray-500 dark:text-gray-400">About Us Image</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('about_page.mission.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('about_page.mission.desc')}
                        </p>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{t('about_page.vision.title')}</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t('about_page.vision.desc')}
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('about_page.service_areas.title')}</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Oranjestad', 'Noord', 'Santa Cruz', 'San Nicolas', 'Paradera', 'Savaneta', 'Malmok', 'Eagle Beach', 'Palm Beach', 'Tanki Leendert', 'Pos Chiquito'].map((area) => (
                            <span key={area} className="bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                                {area}
                            </span>
                        ))}
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{t('about_page.service_areas.surrounding')}</p>
                </div>
            </div>
        </div>
    );
}
