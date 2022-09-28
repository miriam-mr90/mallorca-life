import React from 'react'
import { Header } from '@/components/Header'
import { PageNotFound } from '@/components/PageNotFound'
import { Map } from '@/components/Map'

const Logo = () => {
  return <span>Mallorca•Life</span>
}

const Content = ({ text }) => {
  return <div>{text}</div>
}

const Cta = ({ item }) => {
  return <a href={item.link}>{item.title}</a>
}

const components = {
  header: Header,
  content: Content,
  cta: Cta,
  logo: Logo,
  PageNotFound: PageNotFound,
  placesMap: Map
}

export const Builder = ({type, item}) => {
  const Component = components[type]

  return (
    item.active ? <Component {...item} /> : null
  )
}
