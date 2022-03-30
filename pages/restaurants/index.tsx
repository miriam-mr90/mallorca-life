import { GetStaticProps } from 'next'
import React from 'react'

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

const RestaurantsPage: React.FC<RestaurantsPageProps> = ({ meta, restaurants }) => (
  <Layout meta={meta}>
    <ul>
      <li className='text-brand-main'>{restaurants[0].title}</li>
    </ul>
  </Layout>
)

export default RestaurantsPage
