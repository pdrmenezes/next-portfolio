import { ReactElement } from "react";

export type TProjectData = {
  title: string;
  year: string;
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
    description?: string | ReactElement;
    contentImagesSrc?: string[];
    tags?: string[];
  };
};

export const PROJECTS_DATA: TProjectData[] = [
  {
    title: "abre",
    year: "2024",
    roles: ["development"],
    popoverImageSrc: "abre-popover.webp",
    popoverBgColor: "#177873",
    externalUrlOnly: false,
    externalUrl: "https://abrebrasil.org.br/",
    published: true,
    featured: true,
    get slug() {
      return this.title.toLowerCase().split(" ").join("-");
    },
    content: {
      subtitle: "Non-profit website",
      description: (
        <>
          <p>
            As a volunteer developer at Tech Pro Bem, I contributed to a project for ABRE, a nonprofit organization dedicated to supporting
            individuals with schizophrenia and their families. ABRE works to reduce stigma, foster understanding, and promote well-being in the
            community through education, advocacy, and empowerment.
          </p>
          <p>
            In this role, I collaborated with Product and Design teams to develop a platform built with Next.js and Contentful - a CMS (Content
            Management System) to streamline assets management by ABRE&apos;s team - that aligned with ABRE&apos;s mission of creating a more
            inclusive society.
          </p>
        </>
      ),
      contentImagesSrc: ["/projects/images/abre-1.webp", "/projects/images/abre-2.webp", "/projects/images/abre-3.webp"],
      tags: ["next.js", "react", "typescript", "cms"],
    },
  },
  {
    title: "memory lake",
    year: "2023",
    roles: ["creation", "development"],
    popoverImageSrc: "memory-lake-popover.webp",
    popoverBgColor: "#0000FF",
    externalUrlOnly: false,
    externalUrl: "https://www.memorylake.cc",
    published: true,
    featured: true,
    get slug() {
      return this.title.toLowerCase().split(" ").join("-");
    },
    content: {
      subtitle: "a platform to save and share memories",
      description: (
        <p className="my-3 w-full text-whiteish">
          Memory Lake was created in collaboration with incredibly talented brazilian Artist,{" "}
          <a
            href="https://laurapapa.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer underline transition-all duration-75 hover:font-bold"
          >
            Laura Papa
          </a>
          . It aims to provide people with just the necessary tools to share select memories with their loved ones. Not some AI-generated-non-intimate
          collage.
        </p>
      ),
      // "In computer science, a data lake is a centralized repository designed to store, process, and secure large amounts of structured, semistructured, and unstructured data. It can store data in its native format and process any variety of it. It means data lakes and our memories share things in common — both data and mementos can emerge depending on the input or moment we live in the present.",
      contentImagesSrc: ["/projects/images/memory-lake-1.webp", "/projects/images/memory-lake-2.webp", "/projects/images/memory-lake-3.webp"],
      tags: ["next.js", "react", "typescript", "postgresql", "tailwind", "drizzle"],
    },
  },

  {
    title: "movimento redes",
    year: "2023",
    roles: ["design"],
    popoverImageSrc: "movimento-redes-popover.webp",
    popoverBgColor: "#422969",
    externalUrlOnly: false,
    externalUrl: "https://www.saudeecosol.org",
    published: true,
    featured: true,
    get slug() {
      return this.title.toLowerCase().split(" ").join("-");
    },
    content: {
      subtitle: "Non-profit website",
      description:
        "Movimento Redes is an NGO that helps minorities get in the job market while also providing mental health support and developing cultural and educational activities",
      contentImagesSrc: [
        "/projects/images/movimento-redes-1.webp",
        "/projects/images/movimento-redes-2.webp",
        "/projects/images/movimento-redes-3.webp",
      ],
      tags: ["material ui", "figma"],
    },
  },
  {
    title: "break out?",
    year: "2023",
    roles: ["design", "copy", "development"],
    popoverImageSrc: "break-out.webp",
    popoverBgColor: "#F0F0F0",
    externalUrlOnly: true,
    externalUrl: "https://pdrmenezes.github.io/scroll_animation-with-gsap/",
    published: true,
    featured: true,
    get slug() {
      return this.title.toLowerCase().split(" ").join("-");
    },
  },
];

// This very website
// figma | fonts | colors | techs
