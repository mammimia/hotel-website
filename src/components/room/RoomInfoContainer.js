import React from 'react';
import { BsArrowsFullscreen, BsPeople } from 'react-icons/bs';
import RoomInfo from './RoomInfo';

const RoomInfoContainer = ({ size, maxPerson }) => {
  return (
    <div
      className="bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2
   flex justify-center items-center uppercase font-tertiary tracking-[1px]
    font-semibold text-base"
    >
      <div className="flex justify-between w-[80%]">
        <RoomInfo
          icon={BsArrowsFullscreen}
          iconSize="text-[15px]"
          title="Size"
          value={size + 'm2'}
        />
        <RoomInfo
          icon={BsPeople}
          iconSize="text-[18px]"
          title="Max People"
          value={maxPerson}
        />
      </div>
    </div>
  );
};

export default RoomInfoContainer;
