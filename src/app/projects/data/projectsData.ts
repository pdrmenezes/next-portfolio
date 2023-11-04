export type TProjectData = {
  title: string;
  year: string;
  areas: string[];
  roles: string[];
  popoverImageSrc: string;
  popoverBgColor: string;
  altSlug?: string;
  readonly slug: string;
};

export const projectsData: TProjectData[] = [
  {
    title: "Memory Lake",
    year: "2023",
    areas: ["front-end"],
    roles: ["Creation", "Development"],
    popoverImageSrc: "memory-lake.png",
    popoverBgColor: "#0000FF",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Work in the last decade",
    year: "2023",
    areas: ["front-end", "design"],
    roles: ["Creation", "Development", "Design"],
    popoverImageSrc: "work.png",
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
    popoverImageSrc: "dhmoney.png",
    popoverBgColor: "#D7DBE6",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Movimento Redes",
    year: "2023",
    areas: ["design"],
    roles: ["Development", "Design"],
    popoverImageSrc: "movimento-redes.png",
    popoverBgColor: "#422969",
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
];
