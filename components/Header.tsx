import React from "react";
import Image from 'next/image'

export interface HeaderProps {
  sideBar?: boolean
  setSideBar?: (sideBar: boolean) => void
}

export const Header: React.FC<HeaderProps> = ({sideBar = false, setSideBar  }) => (
  <div className="flex items-center justify-between px-6">
   <h1>Mallorca Life</h1>
    <button
      className="h-10 px-4 my-3 text-sm uppercase bg-white rounded"
      onClick={() => setSideBar(true)}
    >
      {sideBar ? "Close menu" : "Show menu"}
    </button>
  </div>
)


{/* <NextLink href="/">
  <a className="cursor-pointer">
    HOME
  </a>
</NextLink> */}
{/* <nav>
  {categories.map((category) => {
    return (
      <NextLink key={category.title} href={category.url}>
        <a>{category.title}</a>
      </NextLink>
    )
  })}
</nav> */}
