import React from 'react'
import { GetStaticProps } from 'next'
import { getCategoryContent } from '@/src/utils/pageData'
import { Layout, MetaProps } from '@/components/Layout'
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
  title: string
  restaurants: RestaurantProps[]
}

export const getStaticProps: GetStaticProps = async () => {
  const restaurants = await getCategoryContent('restaurants')

  return {
    props: {
      meta: {
        title: 'Restaurants',
        description: 'Restaurants [meta description]',
      },
      title: 'Restaurants',
      restaurants,
    },
  }
}

const RestaurantsPage: React.FC<RestaurantsPageProps> = ({ meta, title, restaurants }) => {
  return (
    <Layout meta={meta}>
      <h2 className='my-6 text-2xl font-semibold'>{title}</h2>
      <section>
        <ul className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
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
}

export default RestaurantsPage
