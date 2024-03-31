"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { poppins } from "@/fonts";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuopen] = useState(false);
  return (
    <div className="bg-[#BE894A] px-[30px] pt-8 flex flex-col">
      <div>
        <div className="flex justify-between mb-2">
          <img src="/images/logo.svg" alt="" />
          <div>
            <img
              src="/images/burger.svg"
              alt=""
              onClick={() => setIsMobileMenuopen(true)}
            />
          </div>
        </div>
        <div className="bg-[#3F0408]">
          <hr
            style={{
              backgroundColor: "#3F0408",
              height: "2px",
              border: "none",
            }}
          />
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={`flex flex-col items-center min-h-screen fixed top-0 bottom-0 left-0 w-full max-w-full z-10 bg-[#BE894A] p-4`}
        >
          <div className="absolute top-8 right-8">
            <img
              src="/images/close.svg"
              alt=""
              onClick={() => setIsMobileMenuopen(false)}
            />
          </div>
          <ul className="flex flex-col gap-8 text-center mt-24 w-2/3">
            <li
              className={`uppercase text-white font-semibold text-2xl leading-normal tracking-widest ${poppins.className}`}
            >
              <Link href="/le-projet" onClick={()=>setIsMobileMenuopen(false)}>le projet miduwe</Link>
            </li>
            <li
              className={`uppercase text-white font-semibold text-2xl leading-normal tracking-widest ${poppins.className}`}
            >
              <Link href="/a-propos" onClick={()=>setIsMobileMenuopen(false)}>qui sommes nous?</Link>
            </li>
            <li
              className={`uppercase text-white font-semibold text-2xl leading-normal tracking-widest ${poppins.className}`}
            >
              <Link href="/contact" onClick={()=>setIsMobileMenuopen(false)}>Contact</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
