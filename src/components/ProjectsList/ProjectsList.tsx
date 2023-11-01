import Image from "next/image";
import memoryLake from "@/assets/images/memory-lake.png";
import workThroughHistory from "@/assets/images/work-through-history.png";

export function ProjectsList() {
  return (
    <>
      {/* PROJECTS CONTAINER */}
      <div className="divide-y divide-neutral-200" id="projects-accordion-conatiner">
        {/* LIST HEADER */}
        {/* <div className="mt-8 flex items-center justify-between px-2 py-5">
          <div className="grid w-full grid-cols-2 sm:grid-cols-3">
            <h3 className="uppercase">project</h3>
            <h3 className="sr-only uppercase sm:not-sr-only">role(s)</h3>
            <h3 className="uppercase">year</h3>
          </div>
          <span className="invisible">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </div> */}
        {/* PROJECT 1 - MEMORY LAKE */}
        <details className="group bg-whiteish bg-opacity-0 px-2 py-5 transition-colors hover:bg-opacity-100 hover:text-blackish open:hover:bg-blackish open:hover:text-whiteish">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            <span className="-rotate-90 transition group-open:rotate-0">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="grid w-full grid-cols-2 sm:grid-cols-3">
              <h4>Memory Lake</h4>
              <h4 className="sr-only sm:not-sr-only">Conception / Development</h4>
              <h4>2023</h4>
            </div>
          </summary>
          <div className="my-6" id="project-body">
            <div className="flex gap-4">
              <p className="rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish">nextjs</p>
              <p className="rounded-full bg-khaki px-3 py-0.5 text-xs font-medium text-blackish">react</p>
              <p className="rounded-full bg-lightgreen px-3 py-0.5 text-xs font-medium text-blackish">figma</p>
            </div>
            <p className="my-3 text-whiteish">
              Memory Lake was created in collaboration with incredibly talented brazilian Artist,{" "}
              <a href="https://laurapapa.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline hover:font-bold">
                Laura Papa
              </a>
              . It aims to provide people with just the necessary tools to share select memories with their loved ones. Not something
              AI-non-intimate-generated collage.
            </p>
            <div id="project-images" className="flex flex-col gap-2 sm:grid sm:grid-cols-3">
              <Image src={memoryLake} alt="memory lake's home screen" width={500} />
              <Image src={memoryLake} alt="memory lake's home screen" width={500} />
              <Image src={memoryLake} alt="memory lake's home screen" width={500} />
            </div>
          </div>
        </details>

        {/* PROJECT 2 - WORK THROUGH HISTORY */}
        <details className="group bg-whiteish bg-opacity-0 px-2 py-5 transition-colors hover:bg-opacity-100 hover:text-blackish open:hover:bg-blackish open:hover:text-whiteish">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium">
            <span className="-rotate-90 transition group-open:rotate-0">
              <svg
                fill="none"
                height="24"
                shapeRendering="geometricPrecision"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="grid w-full grid-cols-2 sm:grid-cols-3">
              <h4>Work through history</h4>
              <h4 className="sr-only sm:not-sr-only">Design / Development</h4>
              <h4>2023</h4>
            </div>
          </summary>
          <div className="mt-3" id="project-body">
            <div className="flex gap-4">
              <p className="rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish">nextjs</p>
              <p className="rounded-full bg-khaki px-3 py-0.5 text-xs font-medium text-blackish">react</p>
              <p className="rounded-full bg-lightgreen px-3 py-0.5 text-xs font-medium text-blackish">figma</p>
            </div>
            <p className="my-3 text-whiteish">
              The project was developed to help visualize our relationship with work throughout the last 2,000 years. It was created in collaboration
              with{" "}
              <a href="https://lailavaraschin.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer underline hover:font-bold">
                Laila Varaschin
              </a>
              . With the data from her now publicly available research we were able to create a more visual depiction of humanity&apos;s relationship
              with work.
            </p>
            <div id="project-images" className="flex flex-col gap-2 sm:grid sm:grid-cols-3">
              <Image src={workThroughHistory} alt="work through history's home screen" width={500} />
              <Image src={workThroughHistory} alt="work through history's home screen" width={500} />
              <Image src={workThroughHistory} alt="work through history's home screen" width={500} />
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
