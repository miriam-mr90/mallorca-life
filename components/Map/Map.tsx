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
  coordinates: Coordinates
  cover?: string
}

export interface MapProps {
  title?: string
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
  const [API_KEY] = useState('')

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
