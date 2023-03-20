import React from 'react';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs';

const Dropdown = ({ items, selected, setSelected }) => {
  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {selected}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {items?.map((item, index) => (
          <Menu.Item
            onClick={() => setSelected(item.name)}
            className="border-b last-of-type:border-b-0 h-12
             hover:bg-accent hover:text-white w-full flex justify-center items-center"
            as="li"
            key={index}
          >
            {item.name}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
