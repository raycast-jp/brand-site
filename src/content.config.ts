import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    connpassUrl: z.string().optional(),
    description: z.string(),
    thumbnail: z.string().optional(),
    photos: z.array(z.string()).optional(),
    tweets: z.array(z.string()).optional(),
    blogPosts: z.array(z.object({
      title: z.string(),
      url: z.string(),
      author: z.string(),
    })).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    avatar: z.string().optional(),
    bio: z.string(),
    social: z.object({
      x: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
    }).optional(),
    contributions: z.array(z.object({
      date: z.string(),
      description: z.string(),
    })).optional(),
  }),
});

export const collections = { events, team };
