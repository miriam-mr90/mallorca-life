import { GetStaticProps } from 'next'
import React from 'react'
import { Layout, MetaProps } from '@/components/Layout'
import { getRestaurants } from '../../src/restaurants'
import { RestaurantCard } from '@/components/Cards/Restaurant'

interface RestaurantProps {
  title: string
  cover: string
  address: string
  description: string | null | undefined
  locationLink: string | null | undefined
  type: string | null | undefined
  price: string | null | undefined
}
interface RestaurantsPageProps {
  meta: MetaProps
  restaurants: RestaurantProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const restaurants = await getRestaurants()

  return {
    props: {
      meta: {
        title: 'Restaurants',
        description: 'Restaurants [meta description]',
      },
      restaurants,
    },
  }
}

const RestaurantsPage: React.FC<RestaurantsPageProps> = ({ meta, restaurants }) => (
  <Layout meta={meta}>
    <h2 className='my-6 text-2xl font-semibold'>Restaurants</h2>
    <section>
      <ul className='flex flex-col gap-5'>
        {restaurants.map((item, index) => (
          <li key={index}>
            <RestaurantCard
              title={item.title}
              description={item.description}
              cover={item.cover}
              address={item.address}
              locationLink={item.locationLink}
              type={item.type}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </section>
  </Layout>
)

export default RestaurantsPage
