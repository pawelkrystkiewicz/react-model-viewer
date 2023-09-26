import * as THREE from 'three'

export const AxisArrows = () => {
  // Length of the arrows
  const length = 100

  // Direction vectors for each axis
  const directions = [
    new THREE.Vector3(1, 0, 0), // X-axis
    new THREE.Vector3(0, 1, 0), // Y-axis
    new THREE.Vector3(0, 0, 1), // Z-axis
  ]

  // Colors for each axis
  const colors = [0xff0000, 0x00ff00, 0x0000ff]

  return (
    <>
      {directions.map((dir, index) => (
        <arrowHelper key={index} args={[dir, new THREE.Vector3(0, 0, 0), length, colors[index]]} />
      ))}
    </>
  )
}
