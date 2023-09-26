import * as THREE from 'three'

export  const getPartURL = (part: string) => {
  return `/models/${part}.stl`
}
export const convertDegrees = (degrees: number) => THREE.MathUtils.degToRad(degrees)
