import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="text-2xl flex justify-between bg-pastel items-center py-4 px-96 shadow-2xl fixed w-full">
      <div>
        <Image src={"logo.svg"} alt={`Logo image`} width={80} height={80} />
      </div>
      <div className="flex justify-between gap-10">
        <Link href={"/"}> Pedals</Link>
        <Link href={"/"}>Amplifiers</Link>
        <Link href={"/"}>Contact</Link>
      </div>
    </div>
  );
};

export default Header;
