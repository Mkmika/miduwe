import React from "react";
import Link from "next/link";
import { naluka } from "@/fonts";
import { motion } from "framer-motion";

export interface danceItem {
  id: Number;
  danceName: string;
  imagePath: string;
  shortDesc: string;
  history: string;
  pratice: string;
}

interface danceCardItem {
  id: Number;
  danceName: string;
  imagePath: string;
}

const DanceCard = (props: danceCardItem) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [100, 0] }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-3"
    >
      <Link href={`/dance/${props.id}`}>
        <motion.img
          src={props.imagePath}
          alt=""
          className="bg-white w-15 h-15 rounded-2xl hover:scale-105 duration-300"
        />
      </Link>
      <p className={`text-[#3A0409] ${naluka.className}`}>{props.danceName}</p>
    </motion.div>
  );
};

export default DanceCard;
