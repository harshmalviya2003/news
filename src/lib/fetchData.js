const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const fetchNewsFromBackend = async (category = "", keyword = "") => {
  const url = new URL(`${BACKEND_URL}/api/news`);
  if (category) url.searchParams.append("category", category);
  if (keyword) url.searchParams.append("keyword", keyword);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch news from backend");
  }
  return response.json();
};

export const fetchNewsById = async (id) => {
  const decodedId = decodeURIComponent(id);
  const response = await fetch(`${BACKEND_URL}/api/news/${encodeURIComponent(decodedId)}`);
  if (!response.ok) {
    throw new Error("Failed to fetch article from backend");
  }
  return response.json();
};