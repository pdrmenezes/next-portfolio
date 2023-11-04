export type TProjectData = {
  title: string;
  year: string;
  areas: string[];
  roles: string[];
  popoverImageSrc: string;
  popoverBgColor: string;
  altSlug?: string;
  externalUrl?: string;
  published: boolean;
  readonly slug: string;
  content?: {
    subtitle?: string;
    description?: string;
    contentImagesSrc?: string[];
    tags?: string[];
  };
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
    published: false,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Work in the last decade",
    year: "2023",
    areas: ["front-end", "design"],
    roles: ["Creation", "Design", "Development"],
    popoverImageSrc: "work.webp",
    popoverBgColor: "khaki",
    published: false,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Digital Money House",
    year: "2023",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "dh-money-house.webp",
    popoverBgColor: "#C1FD35",
    externalUrl: "https://github.com/ThiagoMaurat/dh-money",
    published: true,
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
    published: false,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Break Out?",
    year: "2023",
    areas: ["front-end, design"],
    roles: ["Design", "Copy", "Development"],
    popoverImageSrc: "break-out.webp",
    popoverBgColor: "#F0F0F0",
    externalUrl: "https://pdrmenezes.github.io/scroll_animation-with-gsap/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Airport Flip Board animation",
    year: "2022",
    areas: ["front-end, design"],
    roles: ["Design, Development"],
    popoverImageSrc: "airport-flip-board.webp",
    popoverBgColor: "#70cc84",
    externalUrl: "https://pdrmenezes.github.io/blured-mousetrail-effect-with-animated-text/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Interactive Mouse Cursor",
    year: "2022",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "interactive-mouse-cursror.webp",
    popoverBgColor: "#F0F0F0",
    externalUrl: "https://pdrmenezes.github.io/Mouse-Trailing-Interactive-Mouse-Icons-w-CSS-JS/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Wordle-like",
    year: "2022",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "wordle-like.webp",
    popoverBgColor: "tomato",
    externalUrl: "https://pdrmenezes.github.io/Wordle-Like-HTML-CSS-JS-/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Iliminated Card Corners",
    // thinking about a social project where we iluminate people's dangerous walks home
    year: "2022",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "iluminated-corners.webp",
    popoverBgColor: "#F5F5F5",
    externalUrl: "https://pdrmenezes.github.io/CSS_JS_lit-up-cards-with-css-and-js/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Google's Dino Demo",
    // Best Chrome feature
    year: "2022",
    areas: ["front-end"],
    roles: ["Development"],
    popoverImageSrc: "google-dino.webp",
    popoverBgColor: "#545454",
    externalUrl: "https://pdrmenezes.github.io/JS_Dino_Game/",
    published: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
];

// This very website
// figma | fonts | colors | techs

// 35mm
// still researching a nice way to display them
