import CheckoutLayout from '../checkout-layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ItemsSummary from '@/components/verify/items-summary';
import ItemsGrid from '@/components/verify/items-grid';
import VerifyAddress from '@/components/verify/verify-address';
import VerifyButton from '@/components/verify/verifyButton';
const Verify = () => {
  return (
    <CheckoutLayout title="Баталгаажуулах" backTitle="Буцах" backUrl="/address">

    </CheckoutLayout>
  );
};

export default Verify;
