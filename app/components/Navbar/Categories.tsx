'use client';

import Container from '../Container';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';

export const catotegories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This property has a windmill',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This property is modern',
  },
];
const Categories = () => {
  return (
    <Container>
      <div
        className="
      pt-4
       flex
       flex-row
       items-center
       justify-between
       overflow-x-auto"
      >
        {catotegories.map(item => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
