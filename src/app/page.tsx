"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 px-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-2xl font-bold text-green-700">
          <Image src={"/logotype.png"} alt={"logo"} width={100} height={22} />
        </h1>
        <Link href="/signIn">
          <Button
            variant="outline"
            className="rounded-full border-green-600 text-green-700 hover:bg-green-600 hover:text-white"
          >
            Kirish
          </Button>
        </Link>
      </header>

      {/* Hero section */}
      <main className="flex flex-col items-center text-center mt-16 space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-800"
        >
          Bog‘cha boshqaruv tizimiga xush kelibsiz!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-600 max-w-2xl"
        >
          Bu platforma orqali siz bog‘changizdagi direktorlar, bolalar va
          o‘qituvchilarni boshqarishingiz, hisobotlarni kuzatishingiz va barcha
          ma’lumotlarni markazlashtirilgan tarzda saqlashingiz mumkin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-8"
        >
          <Link href="/signIn">
            <Button
              size="lg"
              className="rounded-full bg-green-600 hover:bg-green-700"
            >
              Admin sifatida kirish
            </Button>
          </Link>
        </motion.div>
      </main>

      {/* Info cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mt-20">
        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-green-700">📊 Statistikalar</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              Har kuni yangilanadigan o‘quvchilar va tarbiyachilar statistikasi.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-green-700">
                👩‍🏫 O‘qituvchilar boshqaruvi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              O‘qituvchilarni ro‘yxatga olish, oylik faoliyatni kuzatish va
              nazorat qilish.
            </CardContent>
          </Card>
        </motion.div>

        <motion.div whileHover={{ scale: 1.03 }}>
          <Card className="shadow-md hover:shadow-lg transition">
            <CardHeader>
              <CardTitle className="text-green-700">
                🏫 Bog‘chalar tarmog‘i
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-600">
              Bir nechta filiallarni yagona panel orqali boshqarish imkoniyati.
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-24 mb-8 text-gray-500 text-sm">
        © {new Date().getFullYear()}{" "}
        {`EBog'cha — Barcha huquqlar himoyalangan.`}
      </footer>
    </div>
  );
}
