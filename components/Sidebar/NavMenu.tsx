import NextLink from 'next/link'
import { motion } from "framer-motion"

export interface NavMenuProps {
  categories: [{
    title: string
    url: string
  }]
}

export const NavMenu: React.FC<NavMenuProps> = ({ categories }) => (
  <nav className="pl-6">
    <motion.ul>
      <motion.li
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center cursor-pointer"
        key="navitem-home"
      >
        <NextLink href="/">
          <a className='text-lg font-semibold'>Home</a>
        </NextLink>
      </motion.li>
      {categories.map((item, index) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer"
          key={`navitem-${index}`}
        >
          <NextLink href={item.url}>
            <a className='text-lg font-semibold'>{item.title}</a>
          </NextLink>
        </motion.li>
      ))}
    </motion.ul>
  </nav>
)
