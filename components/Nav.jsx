"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="w-full flex-between mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="object-contain"
        />
      </Link>
      <div className="sm:hidden flex">mobile button</div>
    </nav>
  );
};

export default Nav;
