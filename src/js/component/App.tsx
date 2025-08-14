/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useState} from 'react'
import {
  TABLE_MODEL_COLOR,
  TABLE_MODEL_TYPE,
  type TableModelColor,
  type TableModelType,
} from '../types'
import {Menu} from './app/Menu.tsx'
import {Table} from './app/Table.tsx'

export const App = () => {
  const [tableModelType, setTableModelType] = useState<TableModelType>(
    TABLE_MODEL_TYPE.CLASSIC.value,
  )
  const [tableModelColor, setTableModelColor] = useState<TableModelColor>(
    TABLE_MODEL_COLOR.GOLD.value,
  )

  return (
    <>
      <Canvas camera={{position: [2, 1, 4]}}>
        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />

        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 4]} intensity={4.5} />

        <Suspense>
          <Table modelType={tableModelType} modelColor={tableModelColor} />
        </Suspense>
      </Canvas>

      <Menu
        tableModelType={tableModelType}
        tableModelColor={tableModelColor}
        handleTableModelType={setTableModelType}
        handleTableModelColor={setTableModelColor}
      />
    </>
  )
}
