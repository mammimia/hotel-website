import React from 'react';

const RoomInfo = ({ icon: Icon, iconSize, title, value }) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="text-accent">
        <Icon className={iconSize} />
      </div>
      <div className="flex items-center gap-x-1">
        <div>{title}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};

export default RoomInfo;
