import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Salveo Integrative Health",
  description: "Take Your Valuable Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto">
          <Header/>
          {children}
        </main>
      </body>
    </html>
  );
}
