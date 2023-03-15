import React, { createContext, useState } from 'react';
import { roomData } from '../data';

export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms] = useState(roomData);
  return (
    <RoomContext.Provider value={{ rooms }}>{children}</RoomContext.Provider>
  );
};

export default RoomProvider;
