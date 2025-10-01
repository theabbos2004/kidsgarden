import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  keepMe: z.boolean().optional(),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      keepMe: false,
    },
  });
  const router = useRouter();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const login = await axios.post("http://localhost:8082/api/auth/login", {
        username: values.username,
        password: values.password,
      });
      if (!login.data) {
        throw Error;
      }
      form.reset();
      router.replace("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("❌ Login error:", error.response?.data || error.message);
      } else if (error instanceof Error) {
        console.error("❌ Login error:", error.message);
      } else {
        console.error("❌ Login error:", error);
      }
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex flex-col"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Foydalanuvchi nomi" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Parol" {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-between">
          <FormField
            control={form.control}
            name={"keepMe"}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex gap-2">
                    <Checkbox
                      checked={field?.value}
                      onCheckedChange={field.onChange}
                      className="border-gray_2"
                      id="keepMe"
                    />
                    <Label htmlFor="keepMe" className="text-gray-500">
                      Eslab qolish
                    </Label>
                  </div>
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Link href="#" className="text-gray-200 hover:underline">
            Parolni unutdingizmi?
          </Link>
        </div>
        <Button
          type="submit"
          size={"xl"}
          variant={"green"}
          className="bg-green-500/50"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
