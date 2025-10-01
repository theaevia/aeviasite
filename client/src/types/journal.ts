export interface JournalFeedEntry {
  title: string;
  slug: string;
  url: string;
  minimal_url: string;
  cover: string | null;
  date: string;
  updated: string | null;
  excerpt: string | null;
  categories: string[];
  tags: string[];
  reading_time: number | null;
  hero_alt: string | null;
}

export interface JournalFeedResponse {
  posts: JournalFeedEntry[];
}
