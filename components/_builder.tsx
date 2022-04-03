import React from 'react'
import { Header } from '@/components/Header'
import { PageNotFound } from '@/components/PageNotFound'

const Logo = () => {
  return <span>Mallorca•Life</span>
}

const Content = ({ item }) => {
  return <div>{item.content}</div>
}

const Cta = ({ item }) => {
  return <a href={item.link}>{item.title}</a>
}

const components = {
  header: Header,
  content: Content,
  cta: Cta,
  logo: Logo,
  PageNotFound: PageNotFound
}

export const Builder = (props) => {
  const Component = components[props.type]

  return <Component item={props.item} />
}
