import NextLink from 'next/link'

export interface Category {
  title: string
  url: string
}

export interface HeaderProps {
  categories: Category[]
}

export function Header({categories}: HeaderProps): JSX.Element {
  return (
    <div>
      <NextLink href="/">
        <a className="cursor-pointer">
          HOME
        </a>
      </NextLink>
      <nav>
        {categories.map((category) => {
          return (
            <NextLink key={category.title} href={category.url}>
              <a>{category.title}</a>
            </NextLink>
          )
        })}
      </nav>
    </div>
  )
}
