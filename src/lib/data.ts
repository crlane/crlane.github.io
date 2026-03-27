export interface Project {
  name: string;
  description: string;
  url?: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    name: "Fermata",
    description: "Music theory and guitar fretboard trainer",
    url: "https://crlane.github.io/fermata",
    tags: ["TypeScript", "Svelte", "music"],
  },
  {
    name: "python-mebo",
    description: "A python client for controlling the Mebo toy robot",
    url: "https://github.com/crlane/python-mebo",
    tags: ["Python"],
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/crlane",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/cameronrlane",
    icon: "linkedin",
  },
];
