import { GetStaticPropsResult } from 'next'
import React, { ReactElement } from 'react'
import { Layout, MetaProps } from '../components/Layout'
import { Builder } from '../components/Builder'
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
  <Layout meta={meta}>
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
