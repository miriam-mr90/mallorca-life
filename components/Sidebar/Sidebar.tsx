import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from 'next/link'
import { NavMenu } from "./NavMenu";
import { Icon, Logo } from '@/components/Icon'

export const Sidebar = ({ sideBar = false, setSideBar, categories }) => {
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
              className="absolute flex items-center justify-center p-2 left-3"
            >
              <Icon icon="close" color="white" size="small"/>
            </button>
            <NextLink href="/">
              <a className='flex justify-center'>
                <Logo icon="logo-sm" color="white"/>
              </a>
            </NextLink>
          </div>
          <NavMenu categories={categories} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
