"use server";

import { getPostsBySearchQuery } from "@/lib/search";
import { PostType } from "@/types";

export async function searchPosts(query: string): Promise<PostType[]> {
  if (!query || typeof query !== "string") {
    throw new Error("Query parameter is required");
  }

  const searchResults = await getPostsBySearchQuery(query);
  return searchResults;
}
