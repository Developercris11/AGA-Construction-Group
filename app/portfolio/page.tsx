'use client';

import { useLanguage } from '@/context/LanguageContext';

const projects = [
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.39.02%20AM%20(1).jpeg', category: 'Carpentry', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.39.03%20AM.jpeg', category: 'Flooring', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.39.04%20AM.jpeg', category: 'Plumbing', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.39.46%20AM.jpeg', category: 'Renovation', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.41.31%20AM.jpeg', category: 'Renovation', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.41.32%20AM.jpeg', category: 'Carpentry', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.42.54%20AM.jpeg', category: 'Flooring', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.42.55%20AM.jpeg', category: 'Flooring', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.42.56%20AM.jpeg', category: 'Plumbing', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.45.46%20AM.jpeg', category: 'Renovation', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Image%202026-02-18%20at%207.45.47%20AM.jpeg', category: 'Renovation', type: 'image' },
    { src: '/raw_assets/WhatsApp%20Video%202026-02-18%20at%207.44.07%20AM.mp4', category: 'Renovation', type: 'video' },
];

export default function Portfolio() {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{t('portfolio.title')}</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        {t('portfolio.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg aspect-square bg-gray-100 dark:bg-gray-800">
                            {project.type === 'video' ? (
                                <video
                                    src={project.src}
                                    controls
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <img
                                    src={project.src}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                    loading="lazy"
                                />
                            )}


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
