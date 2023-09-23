import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // fetch("services.json")
    fetch(
      "https://car-doctor-server-aqmau35c6-nayan-suters-projects.vercel.app/services"
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="bg-base-200 px-20">
      <div className="text-center">
        <h3 className="text-3xl  text-orange-600">Our Services</h3>
        <h2 className="text-5xl font-bold text-fuchsia-700 my-4">
          Services Area
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          laboriosam qui molestiae quia
          <br /> eveniet facilis, itaque, est earum dolores eligendi nemo.
          Sapiente labore nulla laudantium?
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
