import Project from "../components/project";

function CurrentProjects({ projects }) {
  return (
    <ul>
      {/* //   {projects.map(p => (
    //     <li>{p.name}</li>
    //   ))} */}

      {projects.map(p => (
        <Project key={p.id} project={p} />
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/projects");
  const projects = await res.json();
  return {
    props: {
      projects
    }
  };
}

export default CurrentProjects;
