export function Curriculum() {
  return (
    <>
      <h3 className="mb-4 text-[clamp(1.5rem,7vw,3rem)] font-semibold">experiences</h3>
      <div className="divide-y divide-neutral-200" id="projects-accordion-container">
        {/* LIST HEADER */}
        <div className="flex items-center justify-between gap-4 px-2 py-5">
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
          <div className="relative grid w-full grid-cols-2 font-semibold sm:grid-cols-3">
            <h3 className="uppercase">company</h3>
            <h3 className="sr-only uppercase sm:not-sr-only">role(s)</h3>
            <h3 className="uppercase">dates</h3>
          </div>
        </div>
        {/* LAST JOB - HUB XP */}
        <details className="group px-2 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium transition-all group-hover:font-bold">
            <span className="-rotate-90 transition-transform group-open:rotate-0">
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
                className="group-hover:stroke-2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="relative grid w-full grid-cols-2 items-center sm:grid-cols-3">
              <h4 className="text-sm">Hub XP (full time)</h4>
              <h4 className="sr-only sm:not-sr-only">front-end developer</h4>
              <h4>jul 2023 - present</h4>
            </div>
          </summary>
          <div className="my-6" id="project-body">
            <div className="my-3 max-w-prose text-balance px-4 leading-loose md:leading-relaxed">
              <p className="font-medium">Medcel | Afya</p>
              <br />
              <p>
                Medcel is a digital platform aimed at guiding medical students in their studies and empowering them to prepare for critical exams. The
                platform comprises two main components: the Student Platform and the Management Dashboard. Both built with{" "}
                <span className="font-semibold">React</span> and <span className="font-semibold">Redux</span> as the state management library for
                dynamic interfaces. They also feature <span className="font-semibold">Typescript</span> for improved type linting experience,{" "}
                <span className="font-semibold">RESTful APIs</span> to communicate with the backend,{" "}
                <span className="font-semibold">Ant Design, Material UI</span> and <span className="font-semibold">Styled Components</span> for
                responsive, accessible and appealing visuals.
              </p>
              <br />
              <p>My responsibilities include:</p>
              <br />
              <div className="pl-4">
                <li>
                  Collaborating with the design and product teams to create an intuitive user interface that streamlined the study experience for
                  medical students preparing for residency exams.{" "}
                </li>
                <li>
                  Implementing features such as scheduled revision, mentoring tools, and performance tracking to help students effectively manage
                  their study routines and track their progress.
                </li>
                <li>Contributing to the development of a responsive and scalable platform that met the needs of a diverse user base.</li>
              </div>
            </div>
          </div>
        </details>
        {/* TIZIU */}
        <details className="group px-2 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium transition-all group-hover:font-bold">
            <span className="-rotate-90 transition-transform group-open:rotate-0">
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
                className="group-hover:stroke-2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="relative grid w-full grid-cols-2 items-center sm:grid-cols-3">
              <h4>Tiziu Technology (contractor)</h4>
              <h4 className="sr-only sm:not-sr-only">front-end developer / ui designer</h4>
              <h4>aug 2022 - present</h4>
            </div>
          </summary>
          <div className="my-6" id="project-body">
            <div className="my-3 max-w-prose text-balance px-4 leading-loose md:leading-relaxed">
              <p>
                As a front-end developer and designer I dedicate myself to empowering non-governmental organizations (NGOs) to effectively communicate
                their mission, connect with their audience, and drive positive social impact. In this role I:
              </p>
              <br />
              <div className="pl-4">
                <li>
                  Leverage the power of <span className="font-semibold">Next.js, React</span> and <span className="font-semibold">Typescript</span> to
                  build dynamic and high-performance web applications to solve the unique needs and goals of NGOs such as showcase projects, promote
                  events and raise funding.
                </li>
                <li>
                  Implement responsive and accessible user interfaces with <span className="font-semibold">Tailwind CSS</span> that ensure seamless
                  experiences across various devices and browsers.
                </li>
                <li>
                  Exchange data with companies&apos; backends through <span className="font-semibold">RESTful APIs</span>
                </li>
                <li>Help create and improve brand guidelines for companies for digital platforms.</li>
                <li>
                  Integrate interactive features and functionalities (such as Google Calendar and CMS integration) to enhance user engagement and
                  drive meaningful interactions with the NGO&apos;s mission and initiatives.
                </li>
              </div>
            </div>
          </div>
        </details>
        {/* MERIDIANOS */}
        <details className="group px-2 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium transition-all group-hover:font-bold">
            <span className="-rotate-90 transition-transform group-open:rotate-0">
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
                className="group-hover:stroke-2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="relative grid w-full grid-cols-2 items-center sm:grid-cols-3">
              <h4>Meridianos Creative Collective</h4>
              <h4 className="sr-only sm:not-sr-only">co-founder</h4>
              <h4>jun 2019 - aug 2021</h4>
            </div>
          </summary>
          <div className="my-6" id="project-body">
            <div className="my-3 max-w-prose text-balance px-4 leading-loose md:leading-relaxed">
              <p>
                Meridianos dedicated itself to strengthening brands through comprehensive branding strategies, social media content creation, website
                development, while also serving as a creative content hub producing compelling multimedia content.
              </p>
              <br />
              <p>As one of four co-founders, my activities mainly consisted of:</p>
              <br />
              <div className="pl-4">
                <li>
                  Collaborating with clients to understand their brand identity, objectives, and target audience, translating these insights into
                  actionable branding guidelines that ensured consistency and coherence across various channels.{" "}
                </li>
                <li>
                  Contributing to the development of social media content strategies, designing and implementing engaging visual and written content
                  that resonated with the brand&apos;s audience and drove meaningful engagement and interaction.{" "}
                </li>
              </div>
            </div>
          </div>
        </details>

        {/* ALLIANCE FRANÇAISE */}
        <details className="group px-2 py-5">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium transition-all group-hover:font-bold">
            <span className="-rotate-90 transition-transform group-open:rotate-0">
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
                className="group-hover:stroke-2"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
            <div className="relative grid w-full grid-cols-2 items-center sm:grid-cols-3">
              <h4>Alliance Française de Brasilia</h4>
              <h4 className="sr-only sm:not-sr-only">marketing associate</h4>
              <h4>oct 2015 - fev 2019</h4>
            </div>
          </summary>
          <div className="my-6" id="project-body">
            <div className="my-3 max-w-prose text-balance px-4 leading-loose md:leading-relaxed">
              <p>As a full-time marketing associate at the 3rd biggest alliance française in brazil I:</p>
              <br />
              <div className="pl-4">
                <li>Developed and maintained the institution’s website using HTML, CSS, JS and PHP.</li>
                <li>Created and designed digital campaigns and media. </li>
                <li>
                  Planned and executed events with international organizations such as the European Union National Institutes for Culture (EUNIC) and
                  Organisation Internationale de la Francophonie (OIF).
                </li>
                <li>Established national and international collaborations to facilitate over 60 events/year.</li>
                <li>
                  Crafted communication and branding strategies to emphasize the institution’s dedication to promoting the French language and
                  Francophone cultures.
                </li>
              </div>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}
