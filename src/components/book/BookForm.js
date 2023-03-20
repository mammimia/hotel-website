import React, { useContext } from 'react';
import { RoomContext } from '../../context/RoomContext';
import { adultsData, kidsData } from '../../data';
import DatePicker from '../date-picker/DatePicker';
import Dropdown from '../dropdown/Dropdown';

const BookForm = () => {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const { adults, kids, setAdults, setKids, handleCheckClick } =
    useContext(RoomContext);

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <BookFormElement>
          <DatePicker
            date={checkInDate}
            setDate={setCheckInDate}
            label="Check In"
          />
        </BookFormElement>
        <BookFormElement>
          <DatePicker
            date={checkOutDate}
            setDate={setCheckOutDate}
            label="Check Out"
          />
        </BookFormElement>
        <BookFormElement>
          <Dropdown
            selected={adults}
            setSelected={setAdults}
            items={adultsData}
          />
        </BookFormElement>
        <BookFormElement>
          <Dropdown
            selected={kids === kidsData[0].name ? 'No kids' : kids}
            setSelected={setKids}
            items={kidsData}
          />
        </BookFormElement>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleCheckClick}
        >
          Check now
        </button>
      </div>
    </form>
  );
};

const BookFormElement = ({ children }) => {
  return <div className="flex-1 border-r">{children}</div>;
};

export default BookForm;
