import React, { useContext } from 'react';
import { RoomContext } from '../../context/RoomContext';
import { adultsData, kidsData } from '../../data';
import DatePicker from '../date-picker/DatePicker';
import Dropdown from '../dropdown/Dropdown';

const BookForm = ({
  btnText = 'Check now',
  btnClass = '',
  btnClick = null,
  wrapperClass = 'flex-1 border-r'
}) => {
  const [checkInDate, setCheckInDate] = React.useState(null);
  const [checkOutDate, setCheckOutDate] = React.useState(null);
  const { adults, kids, setAdults, setKids, handleCheckClick } =
    useContext(RoomContext);

  const BookFormElement = ({ children }) => {
    return <div className={wrapperClass}>{children}</div>;
  };

  return (
    <>
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
        className={`btn btn-primary ${btnClass}`}
        onClick={btnClick || handleCheckClick}
      >
        {btnText}
      </button>
    </>
  );
};

export default BookForm;
