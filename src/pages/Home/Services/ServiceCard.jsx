// import React from "react";

import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-50 m-1 bg-base-100 shadow-xl border-red-600 border-solid border-2">
      <figure className="px-2 pt-4">
        <img src={img} alt={title} className="rounded-xl w-[230px] h-[175px]" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-yellow-600">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/checkout/${_id}`}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
