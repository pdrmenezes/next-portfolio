import { CURRICULUM_DATA } from "@/data/curriculumData";
import { CurriculumExperience } from "./experience";

export function Curriculum() {
  return (
    <>
      <h3 className="mb-10 text-[clamp(1.5rem,7vw,3rem)] font-semibold">experiences</h3>
      <div id="projects-accordion-container">
        {CURRICULUM_DATA.map((job) => (
          <CurriculumExperience job={job} key={job.company} />
        ))}
      </div>
    </>
  );
}
