"use client";
import {Layout} from "antd";
import {FaWhatsapp, FaEnvelope, FaTwitter} from "react-icons/fa";
import Link from "next/link";
import {logo} from "@/types/types";

const {Footer} = Layout;

export default function FootNav() {
  return (
    <Footer>
      <footer className="footer footer-center p-10">
        <aside>
          <h2 className={`${logo.className} text-4xl`}>Rendevu</h2>
          <p>Copyright ©{new Date().getFullYear()} - All Rights Reserved </p>
          Made with ❤️ by <Link href="https://owenstack.github.io">Owen.</Link>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <Link href="tel:+2348097633252">
              <FaWhatsapp className="w-5 h-5" />
            </Link>
            <Link href="mailto:jenukohaefobi@gmail.com">
              <FaEnvelope className="w-5 h-5" />
            </Link>
            <Link href="https://twitter.com/oweneefobi">
              <FaTwitter className="w-5 h-5" />
            </Link>
          </div>
        </nav>
      </footer>
    </Footer>
  );
}
