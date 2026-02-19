'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Hammer, Ruler, Wrench, Home as HomeIcon, Phone, Building } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col gap-16 pb-16">

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("/hero-bg-woodworking.jpg")' }}
        />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold text-lg transition-colors"
            >
              {t('hero.cta_quote')}
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white/10 rounded-md font-semibold text-lg transition-colors"
            >
              {t('hero.cta_portfolio')}
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white mb-6 leading-relaxed">
            {t('homepage_intro.content_p1')}
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl mb-8">
            <h3 className="text-lg font-bold uppercase tracking-wider text-blue-800 dark:text-blue-300 mb-4">{t('homepage_intro.served_title')}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left max-w-2xl mx-auto">
              {(t('homepage_intro.served_list', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            {t('homepage_intro.content_p2')}
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
            {t('services_overview.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('services_overview.gsubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { id: 'custom_home', icon: HomeIcon, color: 'blue' },
            { id: 'flooring', icon: Ruler, color: 'green' }, // Used for Kitchen in new mapping
            { id: 'plumbing', icon: Wrench, color: 'orange' }, // Used for Bathroom in new mapping
            { id: 'carpentry', icon: Hammer, color: 'amber' },
            { id: 'outdoor', icon: HomeIcon, color: 'emerald' },
            { id: 'renovation', icon: Hammer, color: 'purple' }, // Used for Investment Property
            { id: 'rental', icon: HomeIcon, color: 'indigo' },
            { id: 'general', icon: Wrench, color: 'gray' },
          ].map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow text-center flex flex-col h-full">
              <div className={`w-12 h-12 bg-${service.color}-100 dark:bg-${service.color}-900/30 text-${service.color}-600 dark:text-${service.color}-400 rounded-full flex items-center justify-center mx-auto mb-4`}>
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 min-h-[3.5rem] flex items-center justify-center">
                {t(`services_overview.${service.id}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm flex-grow">
                {t(`services_overview.${service.id}.desc`)}
              </p>
              <Link href="/services" className={`text-${service.color}-600 dark:text-${service.color}-400 hover:text-${service.color}-800 dark:hover:text-${service.color}-300 text-sm font-medium flex items-center justify-center mt-auto`}>
                {t(`services_overview.${service.id}.link`)} <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 dark:bg-gray-900/50 py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('why_choose.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('why_choose.craftsmanship.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('why_choose.craftsmanship.desc')}</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('why_choose.experience.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('why_choose.experience.desc')}</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t('why_choose.reliable.title')}</h3>
              <p className="text-gray-600 dark:text-gray-300">{t('why_choose.reliable.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{t('cta_section.title')}</h2>
          <p className="text-xl mb-8 opacity-90">{t('cta_section.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors"
            >
              {t('cta_section.btn_quote')}
            </Link>
            <a
              href="https://wa.me/2975555555"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 border-2 border-green-500 px-8 py-3 rounded-md font-bold hover:bg-green-50 transition-colors flex items-center justify-center gap-2"
            >
              <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
              {t('cta_section.btn_whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
