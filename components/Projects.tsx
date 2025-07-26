const projects = [
    { title: "SafeSteps", desc: "A mobile app for pedestrian safety." },
    { title: "Spidey-Sense", desc: "A wearable hazard detection device." }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  