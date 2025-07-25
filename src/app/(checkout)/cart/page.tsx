import CheckoutLayout from '../checkout-layout';
import Link from 'next/link';
import CartPageContent from './cart-page-content';
import { Button } from '@/components/ui/button';

const Cart = () => {
  return (
    <CheckoutLayout
      title="Таны сагс"
      backTitle="Дэлгүүр рүү буцах" 
      backUrl="/category"
    >
      <div className="md:grid md:grid-cols-12 md:gap-x-6">
        <CartPageContent>
      
        </CartPageContent>
      </div>
    </CheckoutLayout>
  );
};

export default Cart;
