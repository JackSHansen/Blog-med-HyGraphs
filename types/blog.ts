
// Denne fil beskriver strukturen på blogdata, som hentes fra HyGraph.
export interface BlogDescription {
  text: string;
}

export interface Blog {
  heading: string;
  description: BlogDescription;
}

export interface BlogsResponse {
  blogs: Blog[];
}
