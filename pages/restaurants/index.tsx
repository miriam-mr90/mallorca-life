import { GetStaticProps } from 'next'
import React, { ReactElement } from 'react'

import { Layout, MetaProps } from '@/components/Layout'
import { getRestaurants } from '../../src/restaurants'

interface RestaurantsPageProps {
  meta: MetaProps
  restaurants: any[]
}

export const getStaticProps: GetStaticProps = async () => {
  const restaurants = await getRestaurants()

  return {
    props: {
      meta: {
        title: 'meta title',
        description: 'meta description',
      },
      restaurants,
    },
  }
}

export default function RestaurantsPage({ meta, restaurants }): ReactElement {
  return (
    <Layout meta={meta}>
      <ul>
        <li className='text-brand-main'>{restaurants[0].title}</li>
      </ul>
    </Layout>
  )
}
