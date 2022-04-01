import { GetStaticProps } from 'next'
import React from 'react'
import { getBeaches } from '../../src/beaches'
import { Layout, MetaProps } from '@/components/Layout'
import { BeachCard } from '@/components/Cards/Beach'

interface BeachesPageProps {
  meta: MetaProps
  beaches: any[]
}

export const getStaticProps: GetStaticProps = async () => {
  const beaches = await getBeaches()

  return {
    props: {
      meta: {
        title: 'Beaches & Caves',
        description: 'Beaches & Caves [meta description]',
      },
      beaches,
    },
  }
}

const BeachesPage: React.FC<BeachesPageProps> = ({ meta, beaches }) => (
  <Layout meta={meta}>
    <h2 className='my-6 text-2xl font-semibold'>Beaches & Caves</h2>
    <ul className='flex flex-col gap-5'>
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
  </Layout>
)

export default BeachesPage
