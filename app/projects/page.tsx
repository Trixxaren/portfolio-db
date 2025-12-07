import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Projekt</h1>
      <p className="mt-2 text-sm text-slate-600">
        Ett urval av projekt jag byggt under min frontendutbildning.
      </p>

      <div className="mt-6 grid gapa-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{project.description}</p>
            <p className="mt-3 text-xs font-medium uppercase text-slate-500">
              Techstack: {project.tech.join(" • ")}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

// export default function page() {
//   return (
//     <main className="p-6">
//       <h1 className="text-3xl font-bold">Mina projekt</h1>
//       <p className="mt-4 max-w-xl">
//         Dessa projekt har jag byggt med olika ramverk...
//       </p>
//     </main>
//   );
// }
