import React from 'react'
import { GetStaticPropsResult } from 'next'
import { getPageContent } from '@/src/utils/pageData'
import { Builder } from '@/components/_builder'
import { Layout, MetaProps } from '@/components/Layout'

interface AboutProps {
  meta: MetaProps
  aboutPageData: any
}

export async function getStaticProps(): Promise<GetStaticPropsResult<AboutProps>> {
  const aboutPageData = await getPageContent('about')

  return {
    props: {
      meta: {
        title: 'Mallorca Life',
        description: 'This is the Mallorca Life meta descrption',
      },
      aboutPageData,
    },
  }
}

const AboutPage: React.FC<AboutProps> = ({ aboutPageData, meta }) => (
  <Layout meta={meta}>
    {aboutPageData.builder.map((item) => (
      <Builder
        key={item.type.replace(/\s/g, '-')}
        type={item.type}
        item={item}
      />
    ))}
  </Layout>
)

export default AboutPage
