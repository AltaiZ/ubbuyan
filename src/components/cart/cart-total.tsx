'use client';

import { cartTotalAtom } from '@/store/cart.store';
import Price from '../price/price';
import { useAtomValue } from 'jotai';

const CartTotal = () => {
  const totalAmount = useAtomValue(cartTotalAtom);
  // return <Price amount={totalAmount} />;

  return <Price amount={totalAmount+6000} />;
  // <Price amount={(deliveryProduct || 0) + 6000} />
};

export default CartTotal;
