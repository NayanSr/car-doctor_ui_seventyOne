const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
  const { _id, service, customerName, email, price, img, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square btn-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <img
          className="avatar w-28 rounded-md my-auto"
          src={img}
          alt="Avatar Tailwind CSS Component"
        />
      </td>
      <td>
        <p className=" ml-4">{service}</p>
      </td>
      <td>
        <p className="mt-0">{customerName}</p>
      </td>
      <td>{email}</td>
      <td>{price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-green-700">Confirmed</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs text-orange-600"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
