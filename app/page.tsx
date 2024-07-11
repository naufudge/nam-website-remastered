'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import NavBar from "@/components/nav";
import Announcements from "@/components/announcements";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RecentImages from "@/components/recent-images";
import HistoryToday from "@/components/history-today";

// The following 2 will be used to animate the title of the landing page
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Home() {
  return (
    <div className="main">
      {/* Nav Bar */}
      <NavBar />

      <div className="my-[70px] h-fit items-center justify-center relative">
        <Image src="/pics/main pic.png" width={2000} height={2000} alt="logo" className="mx-auto" />
        <div className="px-[2rem] mx-10 w-[650px] absolute top-24 flex flex-col gap-5">
          <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          transition={{type: "spring", stiffness: 100}}
          className="container px-0 align-middle text-[4rem] text-white font-[Wittgenstein]"
          >
            <motion.span className="item" variants={item}>National </motion.span>
            <motion.span className="item" variants={item}>Archives</motion.span>
            <br />
            <motion.span className="item" variants={item}>of </motion.span>
            <motion.span className="item" variants={item}>Maldives</motion.span>
          </motion.div>

          <div className="text-white text-lg">A public legal entity established under the Archives Act (16/2011) on 19th January 2012.</div>
          
          <Button
          variant="outline"
          color="white"
          className="w-[250px] h-[70px] px-5 text-lg drop-shadow justify-between"><Link href={"/"}>Service Request</Link><ArrowRight /></Button>
        </div>
      </div>

      <div className="static mx-20">
        <Announcements />
      </div>

      <div className="static m-20 grid grid-cols-2">
          <RecentImages />
          <HistoryToday />
      </div>
    </div>
  );
}
