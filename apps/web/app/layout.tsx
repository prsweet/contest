'use client'
import localFont from "next/font/local";
import "./globals.css";
import { useAuthStore } from "./store";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const pathname = usePathname()
  const { isAuthenticated } = useAuthStore((state) => state)

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('not authenticated', isAuthenticated)
      router.replace('/signin')
    }
  }, [isAuthenticated, pathname, router])

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
