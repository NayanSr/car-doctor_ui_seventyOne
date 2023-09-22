// import React from 'react'
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

export default function About() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} alt="" className="w-5/6 rounded-lg shadow-2xl" />
          <img
            src={parts}
            alt=""
            className="absolute -bottom-16 right-8 w-3/5 border-8 border-gray-900 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold bg-amber-700 w-1/2 text-center rounded-md p-2 mb-2">
            About Us
          </h3>
          <h1 className="text-5xl font-bold">Box</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aperiam illum nisi totam nulla earum repellat
            laudantium cumque, ex est!
          </p>
          <button className="btn btn-primary">Get Start</button>
        </div>
      </div>
    </div>
  );
}
