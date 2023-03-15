import React from 'react';
import RoomDescription from './RoomDescription';
import RoomImage from './RoomImage';
import RoomInfoContainer from './RoomInfoContainer';

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="bg-white shadow-2xl min-h-[500px] group">
      <RoomImage image={image} />
      <RoomInfoContainer size={size} maxPerson={maxPerson} />
      <RoomDescription
        id={id}
        name={name}
        description={description}
        price={price}
      />
    </div>
  );
};

export default Room;
