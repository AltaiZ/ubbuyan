'use client';

import { cartAtom } from '@/store/cart.store';
import { useAtomValue } from 'jotai';
import { Badge } from '../ui/badge';

const ItemsSummary = () => {
  const items = useAtomValue(cartAtom);

  return (
    <>
      {items.map((item) => (
        <div className="flex justify-between items-start" key={item._id}>
          {item.productName}
          <div className="flex justify-between w-1/3">
            <Badge variant="secondary">x{item.count}</Badge>
      
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemsSummary;
