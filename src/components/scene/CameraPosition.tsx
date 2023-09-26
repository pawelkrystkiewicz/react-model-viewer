import { useFrame, useThree } from '@react-three/fiber'
import { useState } from 'react'
import * as THREE from 'three'

export const CameraPosition = () => {
  const [cameraPosition, setCameraPosition] = useState<THREE.Vector3>(new THREE.Vector3())

  const { camera } = useThree()
  useFrame(() => {
    setCameraPosition(camera.position.clone())
  })
  const x = cameraPosition.x.toFixed(0)
  const y = cameraPosition.y.toFixed(0)
  const z = cameraPosition.z.toFixed(0)
  console.log(`x: ${x}, y: ${y}, z: ${z}`)

  return (
    <>
      x: {x}, y: {y}, z: {z}
    </>
  )
}
