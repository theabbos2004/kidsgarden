"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { KindegartenFormSchema } from "@/lib/definitions";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KindegartenFormType } from "@/lib/types";

export function KindegartenForm({
  defaultValues,
  setOpen,
  onSubmitCallback,
  type,
}: {
  defaultValues?: KindegartenFormType;
  setOpen?: (prop: boolean) => void;
  onSubmitCallback?: (
    values: z.infer<typeof KindegartenFormSchema>
  ) => Promise<{
    success: boolean;
    data?: unknown;
    error?: unknown;
  }>;
  type?: "readonly";
}) {
  const form = useForm<z.infer<typeof KindegartenFormSchema>>({
    resolver: zodResolver(KindegartenFormSchema),
    defaultValues: defaultValues || {
      name: "",
      phoneNomer: "",
      fullName: "",
      address: "",
      type: "",
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof KindegartenFormSchema>) {
    try {
      const signInRes = await onSubmitCallback?.(values);
      if (signInRes && !signInRes.success) {
        throw Error;
      }
      console.log(signInRes);
      form.reset();
      setOpen?.(false);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        form.setError("root", {
          type: "error",
          message: error.response?.data || error.message,
        });
      } else if (error instanceof Error) {
        form.setError("root", {
          type: "server",
          message: error.message,
        });
      } else {
        return null;
      }
    }
  }
  console.log(type);

  return (
    <Form {...form}>
      <form
        id="kindergarten-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-6"
      >
        {form.formState.errors.root && (
          <p className="text-red-500 text-sm">
            {form.formState.errors.root.message}
          </p>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bog‘cha nomi *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Bog'cha nomi"
                  {...field}
                  readOnly={type === "readonly"}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNomer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefon raqami *</FormLabel>
              <FormControl>
                <Input
                  placeholder="+998 -- --- -- --"
                  {...field}
                  readOnly={type === "readonly"}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Direktor o‘rinbosarini to‘liq ismi *</FormLabel>
              <FormControl>
                <Input
                  placeholder="F.I.O"
                  {...field}
                  readOnly={type === "readonly"}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manzili *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Viloyat, tuman, shahar, ko‘cha, uy"
                  {...field}
                  readOnly={type === "readonly"}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Turi *</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value}
                  disabled={type === "readonly"}
                >
                  <SelectTrigger className="w-auto text-[var(--color-gray)]">
                    <SelectValue placeholder="Turi tanlang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="xususiy">Xususiy</SelectItem>
                    <SelectItem value="davlat">Davlat</SelectItem>
                    <SelectItem value="korporativ">Korporativ</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Eamil"
                  {...field}
                  readOnly={type === "readonly"}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
