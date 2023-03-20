import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { BsCalendar } from 'react-icons/bs';
import './DatePicker.css';

const DatePicker = ({ label, date, setDate }) => {
  return (
    <div className="relative flex items-center justify-end h-full">
      <div className="absolute z-10 pr-8">
        <BsCalendar className="text-accent text-base" />
      </div>
      <ReactDatePicker
        className="w-full h-full"
        selected={date}
        onChange={(date) => setDate(date)}
        placeholderText={label}
      />
    </div>
  );
};

export default DatePicker;
