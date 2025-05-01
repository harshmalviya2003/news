import { NewsArticle } from "./types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL as string;

export const fetchNewsFromBackend = async (
  category: string = "",
  keyword: string = ""
): Promise<NewsArticle[]> => {
  const url = new URL(`${BACKEND_URL}/api/news`);
  if (category) url.searchParams.append("category", category);
  if (keyword) url.searchParams.append("keyword", keyword);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("Failed to fetch news from backend");
  }

  return response.json(); // 🔍 Ensure the backend response matches NewsArticle[]
};

export const fetchNewsById = async (id: string): Promise<NewsArticle> => {
  const decodedId = decodeURIComponent(id);
  const response = await fetch(`${BACKEND_URL}/api/news/${encodeURIComponent(decodedId)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch article from backend");
  }

  return response.json(); // 🔍 Response must match NewsArticle type
};
