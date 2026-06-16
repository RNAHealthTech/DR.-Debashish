import { MetadataRoute } from 'next';
import { services } from '@/data/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://headachespecialistindia.com';

  // Define static routes with their specific metadata configurations
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/academic', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/publications', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/media', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/awards', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/for-doctors', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/resources', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/testimonials', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms-conditions', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Generate dynamic service routes based on services data
  const dynamicServiceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...dynamicServiceEntries];
}
