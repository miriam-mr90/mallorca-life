import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `/${src}?w=${width}&q=${quality || 75}`
}

function BackgroundImage({ item }) {
  return (
    <Image
      loader={myLoader}
      src={item.photo}
      alt="Picture of the author"
      width={500}
      height={500}
    />
  )
}

function Content({ item }) {
  return <div>{item.content}</div>
}

function Cta({ item }) {
  return <a href={item.link}>{item.title}</a>
}

const components = {
  header: BackgroundImage,
  content: Content,
  cta: Cta,
}

export default function Builder(props) {
  const Component = components[props.type]

  return <Component item={props.item} />
}
