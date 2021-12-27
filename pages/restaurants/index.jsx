import { getRestaurants } from '../../src/restaurants'

export async function getStaticProps() {
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

export default function RestaurantsPage({ ...props }) {
  return (
    <ul>
      <li>{props.restaurants[0].title}</li>
    </ul>
  )
}
