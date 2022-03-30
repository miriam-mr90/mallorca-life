import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

const Header = ({ item }) => {
  return (
    <div className="absolute top-0 left-0 w-screen -z-10">
      <Image
        src="/images/header_vector_bg.png"
        width={500}
        height={500}
      />
    </div>
  )
}

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
}

export const Builder = (props) => {
  const Component = components[props.type]

  return <Component item={props.item} />
}
