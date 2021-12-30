import Head from 'next/head'
import { Header } from './Header'

export interface MetaProps {
  title: string
  description: string
}

export const GlobalStyles: React.FC = ({ children }) => (
  <div className="text-navy-900 antialiased">{children}</div>
)

export const Layout: React.FC<{
  meta: MetaProps
}> = ({ meta: { title, description }, children }) => {
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
      <div className="flex flex-col min-h-full">
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        <Header categories={categories}/>
        <main className="flex-1">{children}</main>
      </div>
    </GlobalStyles>
  )
}
