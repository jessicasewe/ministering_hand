"use client";

import Link from "next/link";
import Image from "next/image";
import MinisteringHand from "@/public/ministeringhandlogo.png";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-sans font-bold text-xl text-primary flex items-center gap-2 text-black"
    >
      <Image
        src={MinisteringHand}
        alt="MinisteringHand Logo"
        width={60}
        height={60}
        className="rounded-full"
      />
      Ministering Hand
    </Link>
  );
}
