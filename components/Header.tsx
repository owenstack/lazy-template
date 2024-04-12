"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import {logo} from "@/types/types";
import {Avatar, Layout} from "antd";
import {FaUser} from "react-icons/fa";
import {UserButton, SignedIn, SignedOut} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <Layout>
      <header className="navbar">
        <div className="flex-1">
          <Link href="/" className={`${logo.className} text-xl `}>
            Rendevu
          </Link>
        </div>
        <div className="flex-none gap-2">
          <ThemeToggle />
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <Avatar icon={<FaUser />} />
            </Link>
          </SignedOut>
        </div>
      </header>
    </Layout>
  );
}
