import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { AxisArrows } from './AxisArrows'
import { Part } from './Part'
import { SceneContainer } from './SceneContainer'
import { convertDegrees, getPartURL } from './helpers'

const _emitter = 'kenobi_emitter_bearing_inner'
const connector = 'kenobi_axle'
const body = 'kenobi_riflegrenade'
const pommel = 'kenobi_pommel'

const cameraStartPosition = [-245, 130, 276]

const MainScene3D = () => {
  return (
    <SceneContainer>
      <Canvas>
        <ambientLight />
        <directionalLight position={[1, 1, 1]} />
        <Suspense fallback={<div>Loading...</div>}>
          <Part url={getPartURL(connector)} position={[0, 0, 0]} rotation={[0, 0, 0]} />
          <Part url={getPartURL(body)} position={[-19, -10, -79.25]} rotation={[0, 0, 0]} />
          <Part url={getPartURL(pommel)} position={[25, -17, -200]} rotation={[0, convertDegrees(-180), 0]} />
          <AxisArrows />
          {/* <CameraPosition/> */}
        </Suspense>
        <perspectiveCamera position={cameraStartPosition as any} />
        <OrbitControls />
      </Canvas>
    </SceneContainer>
  )
}

export default MainScene3D
