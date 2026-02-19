'use client';

import { Hammer, Ruler, Wrench, Home } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const servicesData = [
    {
        id: 'carpentry',
        icon: Hammer,
        color: 'blue',
        image: '/services/carpentry.jpg'
    },
    {
        id: 'flooring',
        icon: Ruler,
        color: 'green',
        image: '/services/flooring.jpg'
    },
    {
        id: 'plumbing',
        icon: Wrench,
        color: 'orange',
        image: '/services/plumbing.jpg'
    },
    {
        id: 'renovation',
        icon: Home,
        color: 'purple',
        image: '/services/renovation.jpg'
    }
];

export default function Services() {
    const { t } = useLanguage();

    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('services_page.title')}</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t('services_page.subtitle')}
                    </p>
                </div>

                <div className="space-y-16">
                    {servicesData.map((service, index) => {
                        // We need to fetch the items list which might be an object or array in JSON
                        // In the context, t() usually returns a string, but for lists we need the array
                        // Ideally the translation context supports returning arrays/objects or we map keys
                        const items = t(`services_page.items.${service.id}.list`, { returnObjects: true });
                        const listItems = Array.isArray(items) ? items : [];

                        return (
                            <div key={service.id} id={service.id} className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                <div className={`p-8 md:w-1/2 flex flex-col justify-center bg-${service.color}-50`}>
                                    <div className={`w-16 h-16 bg-${service.color}-100 text-${service.color}-600 rounded-full flex items-center justify-center mb-6`}>
                                        <service.icon className="h-8 w-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{t(`services_page.items.${service.id}.title`)}</h2>
                                    <p className="text-lg text-gray-600 mb-6">{t(`services_page.items.${service.id}.description`)}</p>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {listItems.map((item: string, i: number) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <span className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-2`}></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="md:w-1/2 bg-gray-200 min-h-[300px]">
                                    <div className="w-full h-full relative">
                                        <Image
                                            src={service.image}
                                            alt={t(`services_page.items.${service.id}.title`)}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
