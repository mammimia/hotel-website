import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../context/RoomContext';
import BookForm from '../components/book/BookForm';
import { FaCheck } from 'react-icons/fa';

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();

  const room = rooms.find((room) => room.id === Number(id));
  const { name, description, facilities, price, imageLg } = room;

  return (
    <section>
      <div
        className="bg-room bg-cover bg-center h-[560px] relative flex
     justify-center items-center"
      >
        <div className="absolute h-full w-full bg-black/70"></div>
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          <div className="w-full h-full lg:w-[60%] px-6 ">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" alt="" src={imageLg} />
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ullamco sit nostrud ullamco ipsum dolor esse labore anim
                nisi Lorem proident amet. Sunt velit reprehenderit ea deserunt
                velit. Anim dolore officia mollit magna fugiat amet ea ullamco.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((facility, index) => {
                  const { name, icon } = facility;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base text-accent">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <BookForm
                  btnText={`Book now for $${price}`}
                  btnClass="btn-lg btn-primary w-full"
                  btnClick={() => console.log('Book now')}
                  wrapperClass="h-[60px]"
                />
              </div>
            </div>
            <div>
              <h3 className="h3"> Hotel Rules</h3>
              <p className="mb-6">
                Et cupidatat velit officia nulla eu deserunt Lorem dolor. Ea
                ipsum anim voluptate qui incididunt minim. Qui magna laboris eu
                eu occaecat elit mollit ex.
              </p>
              <ul className="flex flex-col gap-y-4">
                <RuleItem text="Check-in: 3:00 PM - 9:00 PM" />
                <RuleItem text="Check-out: 10:30 AM" />
                <RuleItem text="No Pets" />
                <RuleItem text="No Smoking" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RuleItem = ({ text }) => {
  return (
    <li className="flex items-center gap-x-4">
      <FaCheck className="text-accent" />
      {text}
    </li>
  );
};

export default RoomDetails;
