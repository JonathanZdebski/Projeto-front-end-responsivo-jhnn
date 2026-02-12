import React from "react";
import { NavLink } from "react-router-dom";
import ProjectCardData from "./WorkCardData";

function WorkHome({
  eyebrow = "Portfolio selecionado",
  title = "Projetos",
  highlight = "recentes",
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-6 pt-10 md:px-6 lg:px-8">
      <div className="relative mb-8 flex flex-col items-center text-center md:mb-10">
        <div className="pointer-events-none absolute -top-10 h-24 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

        <p className="relative inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-zinc-900/50 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.35em] text-cyan-200 shadow-[0_8px_24px_rgba(8,145,178,0.2)]">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
          {eyebrow}
        </p>

        <h1 className="relative mt-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
          {title}
          {highlight && (
            <>
              {" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent">
                {highlight}
              </span>
            </>
          )}
        </h1>

        <span className="mt-4 h-px w-36 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {ProjectCardData.map((project) => {
          const projectTag = project.isSaaS
            ? "SaaS"
            : project.isInstitucional
            ? "Institucional"
            : null;

          return (
            <NavLink
              to={project.view}
              key={project.id}
              className="group relative overflow-hidden rounded-[1.6rem] border border-zinc-500/30 bg-[linear-gradient(160deg,rgba(39,39,42,0.5)_0%,rgba(24,24,27,0.5)_100%)] p-3 text-white shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/55 hover:shadow-[0_25px_55px_rgba(14,165,233,0.18)]"
            >
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-zinc-200/10 blur-3xl transition duration-300 group-hover:bg-cyan-300/20" />

              <div className="relative overflow-hidden rounded-xl border border-cyan-200/20 bg-slate-950/70">
                <img
                  src={project.imgsrc}
                  alt={project.title}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105 group-hover:saturate-125"
                />
              </div>

              <div className="relative flex h-full min-h-[230px] flex-col gap-4 p-2 pt-4">
                <div
                  className={`flex items-center gap-3 ${
                    projectTag ? "justify-between" : "justify-end"
                  }`}
                >
                  {projectTag && (
                    <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.18em] text-cyan-100/90">
                      {projectTag}
                    </span>
                  )}
                  {project.isNew && (
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-[0.63rem] font-bold uppercase tracking-[0.18em] text-slate-900">
                      Novo
                    </span>
                  )}
                </div>

                <h2 className="text-center text-[1.5rem] font-semibold leading-tight text-white sm:text-[1.75rem] md:text-[1.6rem]">
                  {project.title}
                </h2>

                {project.text && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.text
                      .replace(/^Tecnologias:\s*/i, "")
                      .split(",")
                      .map((item) => item.trim())
                      .map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-sky-200/35 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100"
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                )}

                <div className="mt-auto flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200/90">
                    Ver projeto
                  </span>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-400/10 text-lg text-cyan-100 transition duration-300 group-hover:translate-x-1 group-hover:bg-cyan-300 group-hover:text-slate-900"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
}

export default WorkHome;
