import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavMenu } from "./NavMenu";
import { Icon } from '@/components/Icon'
import { Logo } from '@/components/Logo'

export default function Sidebar({ sideBar = false, setSideBar, categories }) {
  return (
    <AnimatePresence>
      {sideBar && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{
            x: 0
          }}
          exit={{
            x: "100%"
          }}
          transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          className="fixed top-0 right-0 z-10 w-full h-screen max-w-md p-5 pt-8 text-white shadow-lg bg-brand-main"
        >
          <div className="flex items-center justify-center mb-16">
            <button
              onClick={() => setSideBar(false)}
              className="absolute flex items-center justify-center p-2 left-2"
            >
              <Icon icon="close" color="white"/>
            </button>
            <Logo theme="white" />
          </div>
          <NavMenu categories={categories} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
