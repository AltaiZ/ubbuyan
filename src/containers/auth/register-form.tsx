"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Password } from "@/components/ui/password";
import { useRegister } from "@/sdk/hooks/auth";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { passwordZod, phoneZod } from "@/lib/zod";
import { LoadingIcon } from "@/components/ui/loading";
import { useSetAtom } from "jotai";
import { currentUserAtom } from "@/store/auth.store";
import { useState, useEffect } from "react";

const formSchema = z.object({
  firstName: z.string().min(1, { message: "Нэрээ оруулна уу" }),
  lastName: z.string().optional(),
  email: z.string().email(),
  phone: phoneZod,
  password: passwordZod,
  position: z.string().min(1, { message: "Албан тушаалаа оруулна уу" }),
  company: z.string().min(1, { message: "Байгууллагын нэрийг оруулна уу" }),

});

interface Country {
  code: string;
  name: string;
}

const RegisterForm = () => {
  const router = useRouter();

  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("/countries.json")
      .then((res) => res.json())
      .then((data: Country[]) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error("Error loading countries:", error);
      });
  }, []);

  const setCurrentUser = useSetAtom(currentUserAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      position: "",
      company: "",
    },
  });

  const { register, loading, clientPortalId } = useRegister();

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { position, company, ...restValues } = values;

    const customFieldsData = [
      {
        field: "h6Fv-SOTVeC6LAgVEuY6t",
        value: position,
      },
      {
        field: "b2yoKsTTs-SMtKAVyGsma",
        value: company,
      },
    ];

    register({
      variables: { ...restValues, customFieldsData, clientPortalId },
      onCompleted(data) {
        setCurrentUser({
          _id: data?.registeredUser?._id ?? "",
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          customFieldsData: customFieldsData,
          position,
          company,
        });

        toast.success("Congratulations, You registered successfully", {
          description: ("Таны имэйл рүү баталгаажуулах холбоос илгээлээ."),
        });

        router.push("/login");
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:grid grid-cols-2 space-y-4 lg:space-y-0 gap-y-6 gap-x-3 relative"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{("Таны нэр")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Нэр"
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
              <FormLabel>{("Таны овог")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Овог"
                  {...field}
                  autoComplete="family-name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{("Цахим хаяг")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="john@doe.com"
                  {...field}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{("Утас")}</FormLabel>
              <FormControl>
                <Input placeholder="0000 0000" {...field} autoComplete="tel" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{("Ажлын газар ")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ажлын газар "
                  {...field}
                  autoComplete="company"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="position"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{("Албан тушаал")}</FormLabel>
              <FormControl>
                <Input
                  placeholder="Албан тушаал"
                  {...field}
                  autoComplete="position"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>{("Нууц үг")}</FormLabel>
              <FormControl>
                <Password {...field} autoComplete="new-password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full col-span-2" size="lg" disabled={loading}>
          {loading && <LoadingIcon />}
          {("Бүртгүүлэх")}
        </Button>
        <Alert className="col-span-2">
          <InfoIcon className="h-4 w-4" />
          <AlertTitle className="text-sm">Санамж!</AlertTitle>
          <AlertDescription className="text-xs">
            Та бүртгүүлэх товчийг дарснаар таныг тус вебсайтынүйлчилгээний нөхцөлболон нууцлалын бодлогыгхүлээн зөвшөөрсөнд тооцно.
          </AlertDescription>
        </Alert>
      </form>
    </Form>
  );
};

export default RegisterForm;