/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {
  AccumulativeShadows,
  OrbitControls,
  RandomizedLight,
} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {useState, useEffect} from 'react'
import {
  TABLE_MODEL_COLOR,
  TABLE_MODEL_TYPE,
  type TableModelColor,
  type TableModelType,
} from '../types'
import {Env} from './app/Env.tsx'
import {Menu} from './app/Menu.tsx'
import {Table} from './app/Table.tsx'

export const App = () => {
  const [tableModelType, setTableModelType] = useState<TableModelType>(
    TABLE_MODEL_TYPE.CLASSIC.value,
  )
  const [tableModelColor, setTableModelColor] = useState<TableModelColor>(
    TABLE_MODEL_COLOR.BLACK.value,
  )
  const [tableModelSize, setTableModelSize] = useState(1)
  const [debouncedTableModelSize, setDebouncedTableModelSize] =
    useState(tableModelSize)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTableModelSize(tableModelSize)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [tableModelSize])

  return (
    <>
      <Canvas camera={{position: [2, 1, 4]}} shadows={true}>
        <Env />

        <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={0} />

        <AccumulativeShadows
          temporal={true}
          frames={100}
          color="#000000"
          opacity={0.4}
          position={[0, -1, 0]}
        >
          <RandomizedLight radius={10} position={[2, 10, 4]} />
        </AccumulativeShadows>

        <Table
          modelType={tableModelType}
          modelColor={tableModelColor}
          modelSize={debouncedTableModelSize}
        />
      </Canvas>

      <Menu
        tableModelType={tableModelType}
        tableModelColor={tableModelColor}
        tableModelSize={tableModelSize}
        handleTableModelType={setTableModelType}
        handleTableModelColor={setTableModelColor}
        handleTableModelSize={setTableModelSize}
      />
    </>
  )
}
