import NextLink from 'next/link'
import { motion } from "framer-motion"
import { Icon } from '@/components/Icon'

export interface NavMenuProps {
  categories: [{
    title: string
    url: string
    icon: string
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
      </motion.li>
      {categories.map((item, index) => (
        <motion.li
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center cursor-pointer"
          key={`navitem-${index}`}
        >
          <NextLink href={item.url}>
            <a className='flex items-center py-3 text-lg font-semibold'>
              <Icon icon={item.icon} color="white" className='mr-4'/>
              {item.title}
            </a>
          </NextLink>
        </motion.li>
      ))}
    </motion.ul>
  </nav>
)
