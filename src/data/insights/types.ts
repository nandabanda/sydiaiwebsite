export type InsightSection = {
  heading: string;
  paragraphs: string[];
};

export type EditionArticle = {
  edition: number;
  slug: string;
  title: string;
  description: string;
  readTime: string;
  sections: InsightSection[];
};

export type AppliedArticle = {
  slug: string;
  title: string;
  abstract: string;
  category: string;
  domain: string;
  readTime: string;
  sections: InsightSection[];
};

export type PublicationMeta = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  publisher: string;
  cadence: string;
  chips: readonly string[];
};
