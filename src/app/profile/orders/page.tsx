import ProfileLayout from '../profile-layout';
import { Suspense } from 'react';

const Orders = () => {
  return (
    <ProfileLayout title="Таны захиалгууд" description="">
      <div className="space-y-3">
        <Suspense>
        </Suspense>
      </div>
    </ProfileLayout>
  );
};

export default Orders;
