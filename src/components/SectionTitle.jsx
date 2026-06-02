function SectionTitle({ title }) {
  return (
    <div className="section-title">
      <h1>{title}</h1>
      <span aria-hidden="true" />
    </div>
  );
}

export default SectionTitle;
