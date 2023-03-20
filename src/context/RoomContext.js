import React, { createContext, useEffect, useState } from 'react';
import { adultsData, kidsData, roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState(adultsData[0].name);
  const [kids, setKids] = useState(kidsData[0].name);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleCheckClick = (e) => {
    e.preventDefault();
    const newRooms = roomData.filter((room) => total <= room.maxPerson);
    setRooms(newRooms);
  };

  return (
    <RoomContext.Provider
      value={{ rooms, adults, kids, setAdults, setKids, handleCheckClick }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
