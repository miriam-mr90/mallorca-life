import React from "react";
import { motion } from "framer-motion";
import Head from 'next/head'
import { Header } from './Header'
import Sidebar from "./Sidebar";

export interface MetaProps {
  title: string
  description: string
}

export const GlobalStyles: React.FC = ({ children }) => (
  <div className="antialiased text-navy-900">{children}</div>
)

export const Layout: React.FC<{
  meta: MetaProps
}> = ({ meta: { title, description }, children }) => {
  const [sideBar, setSideBar] = React.useState(false);

  const categories = [
    {
      title: 'Restaurants',
      url: '/restaurants',
    },
    {
      title: 'Beaches & Caves',
      url: '/beaches-and-caves',
    },
  ]
  return (
    <GlobalStyles>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <motion.div
        animate={{
          scale: sideBar ? 0.8 : 1,
          opacity: sideBar ? 0.5 : 1
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.4 }}
        className="container flex flex-col min-h-full p-8 mx-auto"
      >
        <Header sideBar={sideBar} setSideBar={setSideBar}/>
        <main className="flex-1 px-4">{children}</main>
      </motion.div>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} categories={categories}/>
    </GlobalStyles>
  )
}
