This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Pending To Do / Next steps
* Fix images render
* Add filters in Restaurants and Beaches & Caves pages
* Implement Google Maps to integrate as a view in Restaurants and Beaches & Caves pages
* In Beaches & Caves, display type value
* Add a new field in Beaches & Caves for displaying "caracterísitcas"
* Create a new component to display a message for in coming features such as Tourist Attractions, Hiking, Boat Rentals...
* Create "Perfect day in..." page
  * A list with different items
  * Each item will be a beach/place with things for doing there
  * Example: Es Trenc -> Beach, restaurant, possible activities (snorkel, kayak, SUP)
* Publish beta website in Surge or Netlify to be able to share with others
* Design Boat Rentals page
  * Contact data: telephone, number, social media profiles, website...
  * Side of the island
  * Price
* Review how to import types (dev Slack channel) and implement it in `MetaProps`:
  ```
  # pages/restaurants/index.tsx
  import { Layout, MetaProps } from '@/components/Layout'
  ```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Netlify CMS

Netlify CMS Proxy Server is an express server created to facilitate local development. To start the CMS proxy server run:

```bash
npx netlify-cms-proxy-server
```

Navigate to `http://localhost:3000/admin`

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
