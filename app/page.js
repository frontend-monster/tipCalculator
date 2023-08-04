import { splitter } from "@/assets";
import Tip from "@/components/Tip";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-12 pb-0 sm:py-[163px] justify-center items-center">
      
      <Image
        src={splitter}
        alt="splitter"
        unoptimized
      />
      <Tip />
    </main>
  );
}
