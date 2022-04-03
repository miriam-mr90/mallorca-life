import React, { ReactElement } from 'react'
import NextLink from 'next/link'
import { Layout } from './Layout'
import { Icon } from '@/components/Icon'

export interface PageNotFoundProps {
  title: string
  leadText: string
  linkUrl: string
  linkLabel: string
}

const Section404 = ({title, leadText, linkLabel, linkUrl}:PageNotFoundProps) => (
  <section className='flex flex-col items-center'>
    <div className='flex flex-col items-center gap-4 mt-14'>
      <Icon icon='surf' color='grey' size="large" />
      <div className='text-center'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <p className='text-grey'>{leadText}</p>
      </div>
      <NextLink href={linkUrl}>
        <a className='flex justify-center font-semibold text-brand-main'>
          {linkLabel}
        </a>
      </NextLink>
    </div>
  </section>
)

export const PageNotFound = (): ReactElement => {
  const data = {
    meta: {
      title: 'Page not found',
      description: 'This is the page not found meta description',
    },
    title: "404 Page not found",
    leadText: "What you are looking for doesn't exist",
    linkLabel: "Return home",
    linkUrl: '/',
  }

  return (
    <Layout meta={data.meta}>
      <Section404
        title={data.title}
        leadText={data.leadText}
        linkLabel={data.linkLabel}
        linkUrl={data.linkUrl}
      />
    </Layout>
  )
}
