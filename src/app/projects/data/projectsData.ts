export type TProjectData = {
  title: string;
  year: string;
  areas: string[];
  roles: string[];
  popoverImageSrc: string;
  popoverBgColor: string;
  altSlug?: string;
  externalUrl?: string;
  readonly slug: string;
};

export const projectsData: TProjectData[] = [
  {
    title: "Memory Lake",
    year: "2023",
    areas: ["front-end"],
    roles: ["Creation", "Development"],
    popoverImageSrc: "memory-lake.webp",
    popoverBgColor: "#0000FF",
    externalUrl: "https://www.memorylake.cc",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Work in the last decade",
    year: "2023",
    areas: ["front-end", "design"],
    roles: ["Creation", "Development", "Design"],
    popoverImageSrc: "work.webp",
    popoverBgColor: "khaki",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Digital Money House",
    year: "2023",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "dhmoney.webp",
    popoverBgColor: "#D7DBE6",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Movimento Redes",
    year: "2023",
    areas: ["design"],
    roles: ["Design"],
    popoverImageSrc: "movimento-redes.webp",
    popoverBgColor: "#422969",
    externalUrl: "https://www.saudeecosol.org",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
];