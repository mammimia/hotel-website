import React from 'react';

const RoomImage = ({ image }) => {
  return (
    <div className="overflow-hidden">
      <img
        className="group-hover:scale-110 transition-all duration-300 w-full"
        src={image}
        alt=""
      ></img>
    </div>
  );
};

export default RoomImage;
