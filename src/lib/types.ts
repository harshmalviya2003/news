export interface NewsArticle {
    id: string;
    slug: string;
    category: string;
    headline: string;
    thumbnail: {
      type: "video" | "image";
      url: string;
      duration?: string;
    };
    detail: {
      image: string;
      heading: string;
      leadingParagraph: string;
      paragraphs: string[];
    };
  }
  
  export interface SearchParams {
    category?: string;
    q?: string;
  [key: string]: string | string[] | undefined;
  }