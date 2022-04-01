import React from "react";
import { motion } from "framer-motion";
import Head from 'next/head'
import { TopBar } from '@/components/TopBar'
import Sidebar from "@/components/Sidebar"

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

  const categories = [
    {
      title: 'Restaurants',
      url: '/restaurants',
      icon: 'restaurant'
    },
    {
      title: 'Beaches & Caves',
      url: '/beaches-and-caves',
      icon: 'beach'
    },
    {
      title: 'Tourist Attractions',
      url: '/tourist-attractions',
      icon: 'tourist-attractions'
    },
    {
      title: 'Hiking',
      url: '/hiking',
      icon: 'hiking'
    },
    {
      title: 'Bar',
      url: '/bar',
      icon: 'bar'
    },
  ]
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
        className="container flex flex-col w-screen min-h-full"
      >
        <TopBar setSideBar={setSideBar} isHome={isHome}/>
        <main className="flex-1 px-6">{children}</main>
      </motion.div>
      <Sidebar sideBar={sideBar} setSideBar={setSideBar} categories={categories}/>
    </GlobalStyles>
  )
}
