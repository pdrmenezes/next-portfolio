import { ChevronRight } from "@/assets/icons/ChevronRight";
import { CURRICULUM_DATA } from "@/data/curriculumData";

export function CurriculumExperience({ job }: { job: (typeof CURRICULUM_DATA)[number] }) {
  return (
    <details className={`group px-2`}>
      <summary
        className={`group flex w-full cursor-pointer items-center gap-3 border-t border-b-whiteish border-t-whiteish px-2 py-4 text-sm sm:justify-between sm:gap-5 sm:px-10 sm:py-5 sm:text-base`}
      >
        <span className="-rotate-90 transition-transform group-open:rotate-0">
          <ChevronRight className="size-4 sm:size-6" />
        </span>
        <div className="flex flex-1 items-center justify-between gap-1">
          <div className="flex flex-col gap-1 transition-transform duration-500 group-hover:translate-x-2 sm:group-hover:-translate-x-2">
            <h4>{job.company}</h4>
            <h4 className="text-xs text-neutral-400 sm:text-sm">{job.roles.join(" / ")}</h4>
          </div>
          <h4 className="text-xs text-neutral-400 transition-transform duration-500 sm:text-base sm:text-whiteish sm:group-hover:translate-x-2">
            {job.time}
          </h4>
        </div>
      </summary>
      <div className="my-6" id="project-body">
        <div className="my-3 text-pretty px-4 leading-loose md:leading-relaxed">
          <div className="my-5 flex flex-wrap gap-2">
            {job.mainSkills.map((skill) => (
              <p className="w-fit whitespace-nowrap rounded-full bg-whiteish px-3 py-0.5 text-xs font-medium text-blackish" key={skill}>
                {skill}
              </p>
            ))}
          </div>
          <div className="text-sm sm:text-base">{job.description}</div>
        </div>
      </div>
    </details>
  );
}
