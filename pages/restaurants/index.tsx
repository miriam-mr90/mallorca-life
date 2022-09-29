import React, { useState } from 'react'
import { GetStaticProps } from 'next'
import { getCategoryContent } from '@/src/utils/pageData'
import { Layout, MetaProps } from '@/components/Layout'
import { RestaurantCard } from '@/components/Cards/Restaurant'
import { Icon } from '@/components/Icon'
import { Button } from '@/components/Button'
import { Map } from '@/components/Map'

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
  const [isMapView, setMapView] = useState(false)

  return (
    <Layout meta={meta}>
      <div className='flex items-center justify-between'>
        <h2 className='py-6 text-2xl font-semibold'>{title}</h2>
        <Button onClick={() => setMapView(!isMapView)} type='outlined'>
          <Icon icon={isMapView ? 'menu' : 'map'} color="white" size="x-small"/>
        </Button>
      </div>
      {isMapView ? (
        <section>
          <Map places={[
            {
              "id": "es-trenc",
              "name": "Es Trenc",
              "address": "",
              "addresslink": "",
              "cover": "",
              "coordinates": {
                "lat": 39.345906836639706,
                "lng": 2.9845128830182777
              }
            },
            {
              "id": "cala-na-clara",
              "name": "Cala Na Clara",
              "address": "",
              "addresslink": "",
              "cover": "",
              "coordinates": {
                "lat": 39.75805906585125,
                "lng": 3.325786536376884
              }
            }
          ]} />
        </section>
      ) : (
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
      )}
    </Layout>
  )
}

export default RestaurantsPage
