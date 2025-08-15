"use server";

import { cache } from "react";

interface GitHubRepoResponse {
  stargazers_count: number;
}

// One day in seconds: 24 hours * 60 minutes * 60 seconds
const TWO_HOURS = 2 * 60 * 60;

const fetchGitHubStars = cache(async (repo: string): Promise<number> => {
  const url = `https://api.github.com/repos/timtbdev/${repo}`;

  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    Accept: "application/vnd.github.v3+json",
  };

  const response = await fetch(url, {
    headers,
    next: { revalidate: TWO_HOURS },
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("GitHub API Error:", errorText);
    throw new Error("GitHub API request failed");
  }

  const data: GitHubRepoResponse = await response.json();
  return data.stargazers_count;
});

export async function getGitHubStars(repo: string) {
  if (!repo) {
    throw new Error("Repository is required");
  }

  try {
    const stars = await fetchGitHubStars(repo);
    return { stars };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    throw new Error(errorMessage);
  }
}
