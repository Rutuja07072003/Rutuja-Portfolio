function Services() {
  const services = [
    "Frontend Development",
    "React Applications",
    "ASP.NET Core Development",
    "Responsive Website Design",
    "REST API Development",
    "Portfolio Websites",
  ];

  return (
    <section id="services" className="section">

      <h2 className="text-5xl font-bold text-center mb-12">
        Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service) => (
          <div
            key={service}
            className="glass p-8 rounded-3xl text-center"
          >
            <h3 className="text-xl font-semibold">
              {service}
            </h3>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Services;