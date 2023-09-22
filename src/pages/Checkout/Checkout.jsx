import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Checkout = () => {
  const service = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const { title, price, _id, img } = service;
  const { user } = useContext(AuthContext);

  const handleBookService = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const price = form.price.value;
    const email = form.email.value;

    const booking = {
      customerName: name,
      email: email,
      date,
      service: title,
      service_id: _id,
      price,
      img,
    };
    console.log(booking);
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Successfully inserted");
        }
      });
  };

  return (
    <div className="card-body">
      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 01 */}
          <div className=" form-control">
            <label className="label">
              {/* <span className="label-text">Email</span> */}
              <span className="text-red-900">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          {/* 02 */}
          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          {/* 03 */}
          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Due Amount</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              placeholder="Price"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>

          {/* 04 */}
          <div className="form-control">
            <label className="label">
              <span className="text-red-900">Email</span>
            </label>
            <input
              type="text"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered bg-orange-100 text-black"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Confirm Order"
          />
        </div>
      </form>
    </div>
  );
};

export default Checkout;
