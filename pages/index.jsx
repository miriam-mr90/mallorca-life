import Head from 'next/head'

import Builder from '../components/Builder'

import { getPageData } from '../src/pages'

export async function getStaticProps() {
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

export default function Home({ ...props }) {
  console.log('props', props)

  return props.homePageData.builder.map((item, index) => {
    return <Builder key={index} type={item.type} item={item} />
  })
}
