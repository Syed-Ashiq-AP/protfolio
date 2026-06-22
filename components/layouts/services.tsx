import React from "react";
import Service from "../ui/service";

const Services = () => {
  return (
    <div
      className="flex flex-col space-y-2 mx-5 xl:mx-70 my-20 relative min-h-screen"
      id="services"
    >
      <h2 className="font-wide text-xl md:text-3xl text-center md:text-left my-12">
        What <span className="text-blue-200">I Do</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <Service
          title="Full-Stack Development"
          excrept="End-to-end web application development from concept to deployment."
          description="Build scalable frontend and backend systems with modern technologies, ensuring performance, maintainability, and reliability."
        />
        <Service
          title="AI Integration"
          excrept="Bringing intelligence into products and workflows."
          description="Integrate LLMs, AI assistants, recommendation systems, and automation workflows to create smarter user experiences."
        />
        <Service
          title="SaaS Development"
          excrept="Building software products designed to scale."
          description="Develop subscription-based platforms, dashboards, admin panels, and business tools with a focus on growth and usability."
        />
        <Service
          title="API Development"
          excrept="Connecting systems through secure and efficient APIs."
          description="Design and implement RESTful services, authentication systems, third-party integrations, and backend infrastructure."
        />
        <Service
          title="UI/UX Engineering"
          excrept="Transforming complex ideas into intuitive interfaces."
          description="Create responsive, accessible, and user-friendly experiences that balance aesthetics with functionality."
        />
        <Service
          title="Technical Consulting"
          excrept="Helping turn ideas into actionable technical solutions."
          description="Provide guidance on architecture, technology choices, scalability, and product development strategies."
        />
      </div>
    </div>
  );
};

export default Services;
