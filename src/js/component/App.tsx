/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense} from 'react'
import {Table} from './app/Table.tsx'

export const App = () => {
  return (
    <>
      <Canvas camera={{position: [2, 3, 4]}} shadows={true}>
        <OrbitControls />

        <ambientLight intensity={1.5} />
        <directionalLight
          position={[2, 3, 4]}
          intensity={4.5}
          castShadow={true}
        />

        <mesh receiveShadow={true} rotation-x={-Math.PI / 2} position-y={-1}>
          <circleGeometry args={[3]} />
          <meshStandardMaterial color="orange" />
        </mesh>

        <Suspense>
          <Table />
        </Suspense>
      </Canvas>

      <div className="fixed right-10 top-10 flex flex-col justify-center items-center p-8 rounded-2xl shadow-[black_0_0_1rem] opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div>
          <h3>Model</h3>
        </div>

        <div>
          <h3>Color</h3>
        </div>
      </div>
    </>
  )
}
