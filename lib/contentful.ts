// lib/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export async function getPortfolioProjects() {
  const entries = await client.getEntries({
    content_type: 'portfolioProject',
    order: ['-fields.date'] as any
  });

  return entries.items.map((item: any) => ({
    id: item.sys.id,
    title: item.fields.title,
    description: item.fields.description,
    thumbnailImage: item.fields.Image?.fields?.file?.url,
    videos: item.fields.videos?.map((video: any) => ({
      url: video.fields.file.url,
      title: video.fields.title
    })),
    projectUrl: item.fields.url,
    technologies: item.fields.technologies,
    date: item.fields.date
  }));
}