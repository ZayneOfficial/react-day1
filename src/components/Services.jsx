import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section>
      <h1>Our Services</h1>

      <ServiceCard
        title="Web Development"
        description="Building modern websites"
      />

      <ServiceCard
        title="Graphic Design"
        description="Creating professional digital designs"
      />

      <ServiceCard
        title="App Development"
        description="Building useful mobile applications"
      />
    </section>
  );
}

export default Services;