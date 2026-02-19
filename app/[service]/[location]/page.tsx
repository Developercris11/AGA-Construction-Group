import Link from 'next/link';
import { Metadata } from 'next';
import { Phone, CheckCircle } from 'lucide-react';

// Data for generating static params and content
const services = [
    { slug: 'carpentry', name: 'Carpentry', keyword: 'Carpenter' },
    { slug: 'flooring', name: 'Flooring', keyword: 'Flooring Installation' },
    { slug: 'plumbing', name: 'Plumbing', keyword: 'Plumber' },
    { slug: 'renovation', name: 'Renovation', keyword: 'Home Renovation' },
    { slug: 'construction', name: 'Construction', keyword: 'Construction Services' },
];

const locations = [
    { slug: 'oranjestad', name: 'Oranjestad' },
    { slug: 'noord', name: 'Noord' },
    { slug: 'santa-cruz', name: 'Santa Cruz' },
    { slug: 'san-nicolas', name: 'San Nicolas' },
    { slug: 'paradera', name: 'Paradera' },
    { slug: 'savaneta', name: 'Savaneta' },
    { slug: 'malmok', name: 'Malmok' },
    { slug: 'eagle-beach', name: 'Eagle Beach' },
    { slug: 'palm-beach', name: 'Palm Beach' },
    { slug: 'tanki-leendert', name: 'Tanki Leendert' },
    { slug: 'pos-chiquito', name: 'Pos Chiquito' },
];

type Props = {
    params: Promise<{
        service: string;
        location: string;
    }>;
};

/*
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { service, location } = await params;
    const serviceInfo = services.find(s => s.slug === service) || { name: service, keyword: service };
    const locationInfo = locations.find(l => l.slug === location) || { name: location };

    const title = `Best ${serviceInfo.keyword} in ${locationInfo.name}, Aruba | Andres Carpentry`;
    const description = `Looking for a professional ${serviceInfo.keyword.toLowerCase()} in ${locationInfo.name}? Andres Carpentry provides top-quality ${serviceInfo.name.toLowerCase()} services. Get a free quote today!`;

    return {
        title,
        description,
    };
}
*/

export async function generateStaticParams() {
    const params = [];
    for (const service of services) {
        for (const location of locations) {
            params.push({ service: service.slug, location: location.slug });
        }
    }
    return params;
}

export default async function ServiceLocationPage({ params }: Props) {
    const { service, location } = await params;
    const serviceInfo = services.find(s => s.slug === service) || { name: service, keyword: service };
    const locationInfo = locations.find(l => l.slug === location) || { name: location };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-blue-900 text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">
                        Professional {serviceInfo.name} Services in {locationInfo.name}, Aruba
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                        Detailed, reliable, and high-quality {serviceInfo.name.toLowerCase()} work for homes and businesses in {locationInfo.name}.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/quote" className="bg-white text-blue-900 px-8 py-3 rounded-md font-bold hover:bg-gray-100">
                            Get a Free Quote
                        </Link>
                        <a
                            href="https://wa.me/2975555555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-8 py-3 rounded-md font-bold hover:bg-green-600 flex items-center"
                        >
                            <Phone className="h-5 w-5 mr-2" /> WhatsApp Us
                        </a>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            Why Hire Us for {serviceInfo.name} in {locationInfo.name}?
                        </h2>
                        <p className="text-gray-600 mb-6">
                            At Andres Carpentry Construction, we understand the specific needs of properties in {locationInfo.name}.
                            Whether you need residential or commercial {serviceInfo.name.toLowerCase()}, our team delivers precision and quality.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <span>Experienced professionals serving {locationInfo.name}</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <span>High-quality materials and craftsmanship</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <span>Competitive pricing and free estimates</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                                <span>Bilingual service (bilingual team)</span>
                            </li>
                        </ul>
                        <div className="mt-8">
                            <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-800">
                                View All Our Services &rarr;
                            </Link>
                        </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                        {/* Placeholder for local/service image */}
                        <span className="text-gray-500">{serviceInfo.name} in {locationInfo.name}</span>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-gray-50 py-16 text-center px-4">
                <h2 className="text-2xl font-bold mb-4">Ready to improve your property in {locationInfo.name}?</h2>
                <p className="text-gray-600 mb-8">Contact Andres Carpentry Construction today.</p>
                <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700">
                    Contact Us
                </Link>
            </section>
        </div>
    );
}
