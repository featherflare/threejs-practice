import { useLoader } from '@react-three/fiber'
import React from 'react'
import { TextureLoader } from 'three'
import texture from '../assets/images/map.jpeg'

export default function Box() {
  const colorMap = useLoader(TextureLoader, texture)
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach='geometry' args={[3, 3, 3]} />
      {/* <meshLambertMaterial map={colorMap} /> */}
      <meshNormalMaterial attach='material' />
    </mesh>
  )
}
