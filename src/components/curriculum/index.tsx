import { ChevronRight } from "@/assets/icons/ChevronRight";
import { CurriculumExperience } from "./experience";
import { CURRICULUM_DATA } from "@/data/curriculumData";

export function Curriculum() {
  return (
    <>
      <h3 className="mb-4 text-[clamp(1.5rem,7vw,3rem)] font-semibold">experiences</h3>
      <div className="divide-y divide-neutral-200" id="projects-accordion-container">
        {/* LIST HEADER */}
        <div className="flex items-center justify-between gap-4 px-2 py-5">
          <span className="invisible">
            <ChevronRight />
          </span>
          <div className="relative grid w-full grid-cols-2 font-semibold sm:grid-cols-3">
            <h3 className="uppercase">company</h3>
            <h3 className="sr-only uppercase sm:not-sr-only">role(s)</h3>
            <h3 className="uppercase">dates</h3>
          </div>
        </div>
        {CURRICULUM_DATA.map((job) => (
          <CurriculumExperience job={job} key={job.company} />
        ))}
      </div>
    </>
  );
}
