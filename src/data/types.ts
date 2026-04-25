export type Page = "home" | "about" | "projects" | "contact";

export const PAGES: Page[] = ["home", "projects", "about", "contact"];

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  href: string;
  category: "fullstack" | "backend";
}
