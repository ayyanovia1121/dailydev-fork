import type { Metadata } from "next";
import { Nunito} from "next/font/google";
import "./globals.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "@/providers/AuthProvider";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "daily.dov-forked | Where developers suffers together",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${nunito.className} antialiased`}
      >
        <ToastContainer />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
