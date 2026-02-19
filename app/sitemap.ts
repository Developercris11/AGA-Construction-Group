import { MetadataRoute } from 'next'

// Same data as in dynamic page - in a real app, this should be shared
const services = ['carpentry', 'flooring', 'plumbing', 'renovation', 'construction']
const locations = ['oranjestad', 'noord', 'santa-cruz', 'san-nicolas', 'paradera', 'savaneta', 'malmok', 'eagle-beach', 'palm-beach', 'tanki-leendert', 'pos-chiquito']

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://andrescarpentry.com'

    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/quote',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const dynamicRoutes = services.flatMap((service) =>
        locations.map((location) => ({
            url: `${baseUrl}/${service}/${location}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }))
    )

    return [...staticRoutes, ...dynamicRoutes]
}
