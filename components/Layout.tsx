import React from "react";
import { motion } from "framer-motion";
import Head from 'next/head'
import NextLink from 'next/link'
import { TopBar } from '@/components/TopBar'
import Sidebar from "@/components/Sidebar"
import { categories } from "@/src/content";

export const GlobalStyles: React.FC = ({ children }) => (
  <div className="antialiased text-navy-900">{children}</div>
)

export interface MetaProps {
  title: string
  description: string
}

interface LayoutProps {
  meta: MetaProps
  isHome?: boolean
  children: React.ReactNode
}

export const Layout = ({
  meta: { title, description },
  isHome = false,
  children
}: LayoutProps) => {
  const [sideBar, setSideBar] = React.useState(false);

  return (
    <GlobalStyles>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <motion.div
        animate={{
          scale: sideBar ? 0.8 : 1,
          opacity: sideBar ? 0.5 : 1
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="container flex flex-col w-screen min-h-screen mx-auto"
      >
        <TopBar setSideBar={setSideBar} isHome={isHome}/>
        <main className="flex-1 px-6">{children}</main>
        <footer className="flex justify-center py-3 mt-8">
          <NextLink href="https://www.linkedin.com/in/miriam-mr/">
            <a className='text-xs text-brand-main'>
              © Miriam M.
            </a>
          </NextLink>
        </footer>
      </motion.div>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} categories={categories}/>
    </GlobalStyles>
  )
}
