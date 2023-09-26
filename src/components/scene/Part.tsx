import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'

interface LightsaberPartProps {
  url: string
  position?: [number, number, number]
  rotation?: [number, number, number]
}

export const Part = ({ url, position, rotation }: LightsaberPartProps) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useEffect(() => {
    const loader = new STLLoader()
    loader.load(url, (geometry: any) => {
      if (meshRef.current) {
        meshRef.current.geometry = geometry
      }
    })
  }, [url])

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <meshStandardMaterial color={0xcccccc} />
    </mesh>
  )
}
