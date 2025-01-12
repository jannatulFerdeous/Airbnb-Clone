'use client';

import useRentModel from '@/app/hooks/useRentModal';
import Modals from './Modals';

const RentModal = () => {
  const rentModal = useRentModel();
  return (
    <div>
      <Modals
        isOpen={rentModal.isOpen}
        title="Airbnb your home!"
        onClose={rentModal.onClose}
        onSubmit={rentModal.onClose}
        actionLabel="Submit"
      />
    </div>
  );
};

export default RentModal;
