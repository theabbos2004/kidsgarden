import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center h-screen">
        <div className="text-center space-y-6">
          {/* 404 Number */}
          <h1 className="text-[8rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse">
            404
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300">
            Oops! The page you’re looking for doesn’t exist.
          </p>

          {/* Return Home Button */}
          <Link
            href="/"
            className="inline-block mt-4 px-6 py-3 rounded-2xl text-lg font-medium 
                       bg-gradient-to-r from-blue-600 to-purple-600 
                       hover:from-purple-600 hover:to-blue-600 
                       transition-all duration-300 shadow-lg hover:shadow-purple-500/30 cursor-pointer"
          >
            Go Home
          </Link>

          {/* Small glow animation */}
          <div className="absolute inset-0 flex items-center justify-center z-[-1]">
            <div className="w-64 h-64 bg-blue-500/10 blur-3xl rounded-full animate-ping"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
