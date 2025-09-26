import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignInForm } from "@/app/_widgets/SignInForm";

export default function SignIn() {
  return (
    <section className="flex py-10 min-h-screen">
      <div className="flex w-2/4 gap-5 flex-col">
        <Link className="flex items-center gap-2" href="/">
          <Image src={"/logotype.png"} alt={"logo"} width={100} height={22} />
        </Link>
        <div className="space-y-10 place-self-center my-auto">
          <div className="space-y-4">
            <h1 className="text-2xl text-gray-500 font-bold text-center">
              Xush kelibsiz!
            </h1>
            <p className="text-gray-400 text-center">
              Tizimga kirish uchun login va parolingizni kiriting.
            </p>
          </div>
          <SignInForm />
          <p className="text-center">
            Hisobingiz yo‘qmi?
            <Link href="#" className="text-green-500 hover:underline pl-0.5">
              Biz bilan bog‘laning
            </Link>
          </p>
        </div>
      </div>
      <div className="w-2/4 flex justify-center items-center rounded-3xl bg-green-500/25 p-4">
        <Image
          src="/images/dashboard.png"
          alt="dashboard content"
          width={800}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
}
