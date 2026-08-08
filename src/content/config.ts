import { defineCollection, z } from "astro:content";

const linkSchema = z.object({
  label: z.string(),
  url: z.string(),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateStart: z.string(), // e.g. "Jan 2026"
    dateEnd: z.string().optional(), // omit if ongoing
    org: z.string().optional(), // team / company / course
    category: z.enum(["design", "manufacturing", "analysis", "coursework", "engineering"]),
    summary: z.string(), // one or two sentences for the card
    tags: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    featured: z.boolean().default(false), // show on the About page
    order: z.number().default(0), // lower = shown first
  }),
});

const research = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    dateStart: z.string(),
    dateEnd: z.string().optional(),
    org: z.string().optional(), // lab / advisor / conference
    kind: z.enum(["study", "publication"]).default("study"),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    links: z.array(linkSchema).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const experience = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(), // role / job title
    org: z.string(),
    dateStart: z.string(),
    dateEnd: z.string().optional(),
    kind: z.enum(["job", "leadership"]).default("job"),
    bullets: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects, research, experience };
