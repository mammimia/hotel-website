import React from 'react';
import { Link } from 'react-router-dom';

const RoomDescription = ({ id, name, description, price }) => {
  return (
    <>
      <div className="text-center">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="max-w-[300px] mx-auto mb-3 lg:mb-6">
          {description.slice(0, 56)}
        </p>
      </div>
      <Link
        to={`/room/${id}`}
        className="btn btn-secondary btn-sm max-w-[240px] mx-auto"
      >
        Book now from ${price}
      </Link>
    </>
  );
};

export default RoomDescription;
