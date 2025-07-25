'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../../ui/form';
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import { useAtomValue } from 'jotai';
import { currentUserAtom } from '@/store/auth.store';
import { useUserEdit } from '@/sdk/hooks/auth';

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string()
});

const ProfileEdit = () => {
  const { firstName, lastName, _id } = useAtomValue(currentUserAtom) || {};
  const { editUser, loading } = useUserEdit();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    values: {
      firstName: firstName || '',
      lastName: lastName || ''
    }
  });
  const user = useAtomValue(currentUserAtom);

  const position =
    user?.customFieldsData?.find((f) => f.field === "h6Fv-SOTVeC6LAgVEuY6t")
      ?.value ?? null;
  const company =
    user?.customFieldsData?.find((f) => f.field === "b2yoKsTTs-SMtKAVyGsma")
      ?.value ?? null;

  const positionBorder = position ? "border border-gray-300" : "border border-red-600";
  const companyBorder = company
    ? "border border-gray-300"
    : "border border-red-600";

  function onSubmit(values: z.infer<typeof formSchema>) {
    editUser({ variables: { ...values, _id } });
  }

  return (
    <Form {...form}>
      <form
        className="space-y-6 relative max-w-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Нэр</FormLabel>
              <FormControl>
                <Input
                  placeholder="John"
                  {...field}
                  autoComplete="given-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Овог</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  autoComplete="family-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={loading} variant="non">Өөрчлөлт хадгалах</Button>
        <div className="text-sm text-black space-y-2">
          <div className="flex items-center">
            <span className="min-w-[80px]">{("Ажлын газар")}:</span>
            <span className={`font-medium px-3 py-1 rounded ml-4 ${companyBorder}`}>
              {company ?? ("Хоосон")}
            </span>
          </div>
          <div className="flex items-center">
            <span className="min-w-[80px]">{("Албан тушаал")}:</span>
            <span className={`font-medium px-3 py-1 rounded ml-3 ${positionBorder}`}>
              {position ?? ("Хоосон")}
            </span>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ProfileEdit;
