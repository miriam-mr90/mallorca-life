import { GetStaticProps } from 'next'
import React from 'react'
import { getCategoryContent } from '@/src/utils/pageData'
import { Layout, MetaProps } from '@/components/Layout'
import { BeachCard } from '@/components/Cards/Beach'

interface BeachProps {
  title: string
  cover: string
  description: string
  locationLink: string | null | undefined
}

interface BeachesPageProps {
  meta: MetaProps
  title: string
  beaches: BeachProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const beaches = await getCategoryContent('beaches')

  return {
    props: {
      meta: {
        title: 'Beaches & Caves',
        description: 'Beaches & Caves [meta description]',
      },
      title: 'Beaches & Caves',
      beaches,
    },
  }
}

const BeachesPage: React.FC<BeachesPageProps> = ({ meta, title, beaches }) => (
  <Layout meta={meta}>
    <h2 className='py-6 text-2xl font-semibold'>{title}</h2>
    <section>
      <ul className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {beaches.map((item, index) => (
          <li key={index}>
            <BeachCard
              title={item.title}
              description={item.description}
              cover={item.cover}
              locationLink={item.locationLink}
            />
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default BeachesPage
