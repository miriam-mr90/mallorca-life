import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavMenu } from "./NavMenu";

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
          className="fixed top-0 right-0 z-10 w-full h-screen max-w-sm p-5 text-white shadow-lg bg-brand-dark"
        >
          <button
            onClick={() => setSideBar(false)}
            className="block w-8 h-8 mb-2 text-black bg-white rounded-full"
          >
            Cerrar
          </button>
          <NavMenu categories={categories} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
