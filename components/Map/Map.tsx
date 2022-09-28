import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

//react-map-gl

interface Coordinates {
  lat: number
  lng: number
}

interface Place {
  id: string
  name: string
  address: string
  addresslink?: string
  city: string
  province: string
  coordinates: Coordinates
  token?: string
  cover: string
  externalpurchaselink?: string
}

export interface MapProps {
  title: string
  places: Place[]
  zoom?: number
}
export const Map: React.FC<MapProps> = ({ title, places, zoom = 7.6 }) => {
  const mapContainer = useRef(null)
  const map = useRef(null)

  const [lngCenter] = useState(places[1].coordinates.lng)
  const [latCenter] = useState(places[1].coordinates.lat)

  const [lng] = useState(places[0].coordinates.lng)
  const [lat] = useState(places[0].coordinates.lat)

  const [lng2] = useState(places[1].coordinates.lng)
  const [lat2] = useState(places[1].coordinates.lat)
  // const [zoom] = useState(14)
  const [API_KEY] = useState('yHs9BRPxJNzP37WLCaRj')

  useEffect(() => {
    if (map.current) return //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`,
      center: [lngCenter, latCenter],
      zoom: zoom
    })

    map.current.addControl(new maplibregl.NavigationControl({}), 'top-right')

    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([lng, lat])
      .addTo(map.current)


    new maplibregl.Marker({color: "#FF0000"})
      .setLngLat([lng2, lat2])
      .addTo(map.current)
  })

  return (
    <section>
      {title && <h2 className='py-6 text-2xl font-semibold text-center'>{title}</h2>}
      <div className="relative w-full h-324">
        <div ref={mapContainer} className="absolute w-full h-full" />
      </div>
    </section>
  )
}

// import {
//   useGoogleMap,
//   GoogleMap,
//   useJsApiLoader,
//   Marker,
//   InfoWindow,
// } from '@react-google-maps/api'
// import { useCallback, useState } from 'react'
// import NextLink from 'next/link'

// interface Coordinates {
//   lat: number
//   lng: number
// }

// interface Place {
//   id: string
//   name: string
//   address: string
//   addresslink?: string
//   city: string
//   province: string
//   coordinates: Coordinates
//   token?: string
//   cover: string
//   externalpurchaselink?: string
// }

// export interface PlacesMapProps {
//   places: Place[]
//   zoom?: number
// }

// const containerStyle = {
//   width: '100%',
//   height: '100%',
// }

// // Maplibre
// // Mapbox
// export const PlacesMap: React.FC<PlacesMapProps> = ({ places, zoom = 8 }) => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey:
//     'AIzaSyDjxYBF-FaroARRkwYhP7geVica0L05Q6s'
//   })

//   const getCenterCoordinates = (() => {
//     let lat = 0
//     let lng = 0

//     places.forEach((cinema) => {
//       lat += cinema.coordinates.lat
//       lng += cinema.coordinates.lng
//     })

//     return { lat: lat / places.length, lng: lng / places.length }
//   })()

//   const [map, setMap] = useState<google.maps.Map>(null)

//   const onUnmount = useCallback(function callback() {
//     setMap(null)
//   }, [])

//   const [selected, setSelected] = useState<Place>(null)

//   return (
//     <div className="relative w-full aspect-w-10 aspect-h-5 2xl:aspect-h-3 xl:aspect-h-4">
//       {isLoaded && (
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={getCenterCoordinates}
//           zoom={zoom}
//           onUnmount={onUnmount}
//         >
//           {places.map(
//             (cinema) =>
//               cinema.coordinates?.lat && (
//                 <Marker
//                   key={cinema.id}
//                   position={cinema.coordinates}
//                   onClick={() => setSelected(cinema)}
//                 >
//                   {selected && selected.id === cinema.id && (
//                     <InfoWindow onCloseClick={() => setSelected(null)}>
//                       <div className="text-base">
//                         <NextLink href="/">
//                           {cinema.name}
//                         </NextLink>
//                         <div className="">{cinema.city}</div>
//                       </div>
//                     </InfoWindow>
//                   )}
//                 </Marker>
//               )
//           )}
//         </GoogleMap>
//       )}
//     </div>
//   )
// }
