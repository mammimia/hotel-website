import React, { createContext, useEffect, useState } from 'react';
import { adultsData, kidsData, roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState(adultsData[0].name);
  const [kids, setKids] = useState(kidsData[0].name);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleCheckClick = (e) => {
    e.preventDefault();
    setLoading(true);
    const newRooms = roomData.filter((room) => total <= room.maxPerson);
    setTimeout(() => {
      setLoading(false);
      setRooms(newRooms);
    }, 1500);
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        kids,
        setAdults,
        setKids,
        handleCheckClick,
        loading
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
