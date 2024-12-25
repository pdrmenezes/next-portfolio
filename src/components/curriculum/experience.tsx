import { ChevronRight } from "@/assets/icons/ChevronRight";
import { CURRICULUM_DATA } from "@/data/curriculumData";

export function CurriculumExperience({ job }: { job: (typeof CURRICULUM_DATA)[number] }) {
  return (
    <details className="group px-2 py-5">
      <summary className="flex cursor-pointer items-center justify-between gap-4 text-sm font-medium transition-all group-hover:font-bold">
        <span className="-rotate-90 transition-transform group-open:rotate-0">
          <ChevronRight />
        </span>
        <div className="relative grid w-full grid-cols-2 items-center text-sm sm:grid-cols-3">
          <h4>{job.company}</h4>
          <h4 className="sr-only sm:not-sr-only">{job.roles.join(" / ")}</h4>
          <h4>{job.time}</h4>
        </div>
      </summary>
      <div className="my-6" id="project-body">
        <div className="my-3 max-w-prose text-balance px-4 leading-loose md:leading-relaxed">
          <div className="my-5 flex flex-wrap gap-2">
            {job.mainSkills.map((skill) => (
              <p className="w-fit whitespace-nowrap rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish" key={skill}>
                {skill}
              </p>
            ))}
          </div>
          {job.description}
        </div>
      </div>
    </details>
  );
}
