import NextLink from 'next/link'
import { motion } from "framer-motion"

export interface NavMenuProps {
  categories: [{
    title: string
    url: string
  }]
}

export const NavMenu: React.FC<NavMenuProps> = ({ categories }) => (
  <motion.ul className="absolute">
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center cursor-pointer"
    >
      <NextLink href="/">
        <a>Home</a>
      </NextLink>
    </motion.li>
    {categories.map((item, index) => (
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center cursor-pointer"
      >
        <NextLink  key={`navitem-${index}`} href={item.url}>
          <a>{item.title}</a>
        </NextLink>
      </motion.li>
    ))}
  </motion.ul>
)
