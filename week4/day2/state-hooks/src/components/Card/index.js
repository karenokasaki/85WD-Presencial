function Card({ project }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>
        {project.dev} - {project.game}
      </h1>
      <p>{project.status}</p>
    </div>
  );
}

export default Card;
