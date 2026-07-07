import { Metadata } from 'next';
import { services } from '@/data/services';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  const url = `https://headachespecialistindia.com/services/${slug}`;

  // Custom tailored metadata for Resistant Migraine as per SEO report
  if (slug === 'resistant-migraine') {
    return {
      title: 'Resistant Migraine Treatment in Karol Bagh, Delhi',
      description:
        'Dr. Debashish Chowdhury offers advanced resistant migraine treatment in Karol Bagh, Delhi. Get expert diagnosis and personalized care for chronic and refractory headaches.',
      keywords: [
        'resistant migraine',
        'chronic headache',
        'refractory headache',
        'migraine treatment Karol Bagh',
        'headache specialist Delhi',
        'Dr. Debashish Chowdhury',
      ],
      alternates: { canonical: url },
      openGraph: {
        title: 'Resistant Migraine Treatment in Karol Bagh, Delhi',
        description: 'Dr. Debashish Chowdhury offers advanced resistant migraine treatment in Karol Bagh, Delhi.',
        url,
      },
      twitter: {
        title: 'Resistant Migraine Treatment in Karol Bagh, Delhi',
        description: 'Dr. Debashish Chowdhury offers advanced resistant migraine treatment in Karol Bagh, Delhi.',
      },
    };
  }

  // Generalized pattern for other services
  const title = `${service.title} Treatment in Karol Bagh, Delhi`;
  const description = `Dr. Debashish Chowdhury offers advanced ${service.title.toLowerCase()} treatment in Karol Bagh, Delhi. ${service.shortDesc}`;
  const keywords = [
    service.title.toLowerCase(),
    `${service.title.toLowerCase()} treatment Karol Bagh`,
    `${service.title.toLowerCase()} Delhi`,
    'Dr. Debashish Chowdhury',
    ...service.features.map((f) => f.toLowerCase()),
  ];

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
