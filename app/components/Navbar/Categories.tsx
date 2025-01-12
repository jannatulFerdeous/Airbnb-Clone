'use client';

import Container from '../Container';
import { TbBeach } from 'react-icons/tb';
import { GiWindmill } from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import CategoryBox from './CategoryBox';
import { useParams, useSearchParams } from 'next/navigation';

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
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = useParams();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

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
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
