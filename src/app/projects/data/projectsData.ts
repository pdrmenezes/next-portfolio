export type TProjectData = {
  title: string;
  year: string;
  areas: string[];
  roles: string[];
  popoverImageSrc: string;
  popoverBgColor: string;
  altSlug?: string;
  externalUrlOnly: boolean;
  externalUrl?: string;
  published: boolean;
  featured: boolean;
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
    externalUrlOnly: false,
    externalUrl: "https://www.memorylake.cc",
    published: true,
    featured: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
    content: {
      subtitle: "a platform to save and share memories",
      description:
        "In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured, semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.",
      contentImagesSrc: ["/projects/images/memory-lake.webp", "/projects/images/memory-lake.webp", "/projects/images/memory-lake.webp"],
      tags: ["nextjs", "react", "figma"],
    },
  },
  {
    title: "Work In The Last Decade",
    year: "2023",
    areas: ["front-end", "design"],
    roles: ["Creation", "Design", "Development"],
    popoverImageSrc: "work.webp",
    popoverBgColor: "khaki",
    externalUrlOnly: false,
    published: false,
    featured: true,
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
    externalUrlOnly: false,
    externalUrl: "https://github.com/ThiagoMaurat/dh-money",
    published: true,
    featured: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
    content: {
      subtitle: "digital house's final project",
      description: "A Digital Wallet so you never have to worry about carrying money again.",
      contentImagesSrc: ["/projects/images/dh-money-house.webp", "/projects/images/dh-money-house.webp", "/projects/images/dh-money-house.webp"],
      tags: ["nextjs", "react", "figma", "chakra ui"],
    },
  },
  {
    title: "Movimento Redes",
    year: "2023",
    areas: ["design"],
    roles: ["Design"],
    popoverImageSrc: "movimento-redes.webp",
    popoverBgColor: "#422969",
    externalUrlOnly: false,
    externalUrl: "https://www.saudeecosol.org",
    published: true,
    featured: true,
    get slug() {
      return this.title.split(" ").join("-");
    },
    content: {
      subtitle: "NGO's website revamp",
      description:
        "Movimento Redes is an NGO that helps minorities get in the job market while also providing mental health support and developing cultural and educational activities",
      contentImagesSrc: ["/projects/images/movimento-redes.webp", "/projects/images/movimento-redes.webp", "/projects/images/movimento-redes.webp"],
      tags: ["figma", "material ui"],
    },
  },
  {
    title: "Break Out?",
    year: "2023",
    areas: ["front-end, design"],
    roles: ["Design", "Copy", "Development"],
    popoverImageSrc: "break-out.webp",
    popoverBgColor: "#F0F0F0",
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/scroll_animation-with-gsap/",
    published: true,
    featured: false,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  {
    title: "Airport Flip Board",
    year: "2022",
    areas: ["front-end, design"],
    roles: ["Design, Development"],
    popoverImageSrc: "airport-flip-board.webp",
    popoverBgColor: "#70cc84",
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/blured-mousetrail-effect-with-animated-text/",
    published: true,
    featured: false,
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
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/Mouse-Trailing-Interactive-Mouse-Icons-w-CSS-JS/",
    published: true,
    featured: false,
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
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/Wordle-Like-HTML-CSS-JS-/",
    published: true,
    featured: false,
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
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/JS_Dino_Game/",
    published: true,
    featured: false,
    get slug() {
      return this.title.split(" ").join("-");
    },
  },
  // {
  //   title: "Iluminated Card Corners",
  //   // thinking about a social project where we iluminate people's dangerous walks home
  //   year: "2022",
  //   areas: ["front-end"],
  //   roles: ["Development"],
  //   popoverImageSrc: "iluminated-corners.webp",
  //   popoverBgColor: "#F5F5F5",
  //   externalUrl: "https://pdrmenezes.github.io/CSS_JS_lit-up-cards-with-css-and-js/",
  //   published: true,
  //   featured: false,
  //   get slug() {
  //     return this.title.split(" ").join("-");
  //   },
  // },
];

// This very website
// figma | fonts | colors | techs

// 35mm
// still researching a nice way to display them
