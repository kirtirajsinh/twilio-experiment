import Image from "next/image";
import { Inter } from "next/font/google";
import Call from "@/components/Call";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex  flex-col items-center justify-between gap-24 p-24 ${inter.className}`}
    >
      <h1 className="text-2xl"> MAKE A 📞 </h1>
      <Call />
    </main>
  );
}
