import React from 'react'
import { GetStaticPropsResult } from 'next'
import { Builder } from '@/components/_builder'
import { Layout, MetaProps } from '@/components/Layout'
import { getPageData } from '../src/pages'

interface HomeProps {
  meta: MetaProps
  homePageData: any
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomeProps>> {
  const homePageData = await getPageData('home.json')

  return {
    props: {
      meta: {
        title: 'Mallorca Life',
        description: 'This is the Mallorca Life meta descrption',
      },
      homePageData,
    },
  }
}

const Home: React.FC<HomeProps> = ({ homePageData, meta }) => (
  <Layout meta={meta} isHome={true}>
    {homePageData.builder.map((item) => (
      <Builder
        key={item.type.replace(/\s/g, '-')}
        type={item.type}
        item={item}
      />
    ))}
  </Layout>
)

export default Home
