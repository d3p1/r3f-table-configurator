/**
 * @description App
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {OrbitControls} from '@react-three/drei'
import {Canvas} from '@react-three/fiber'
import {Suspense, useState} from 'react'
import {TABLE_MODEL_TYPE, type TableModel} from '../types'
import {Table} from './app/Table.tsx'

export const App = () => {
  const [tableModelType, setTableModelType] = useState<TableModel>(
    TABLE_MODEL_TYPE.CLASSIC.value,
  )

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
          <Table modelType={tableModelType} />
        </Suspense>
      </Canvas>

      <div className="fixed right-10 top-10 flex flex-col gap-4 p-8 text-sm rounded-2xl shadow-[black_0_0_1rem] opacity-50 hover:opacity-100 transition-opacity duration-500">
        <div>
          <h3 className="font-black uppercase mb-3">Model</h3>

          <ul className="flex flex-col gap-3">
            {Object.keys(TABLE_MODEL_TYPE).map((key) => {
              return (
                <li key={key} className="flex flex-row gap-2 text-xs">
                  <input
                    type="radio"
                    name="table_model_type"
                    id={`table_model_${key}`}
                    value={
                      TABLE_MODEL_TYPE[key as keyof typeof TABLE_MODEL_TYPE]
                        .value
                    }
                    checked={
                      tableModelType ===
                      TABLE_MODEL_TYPE[key as keyof typeof TABLE_MODEL_TYPE]
                        .value
                    }
                    onChange={() =>
                      setTableModelType(
                        TABLE_MODEL_TYPE[key as keyof typeof TABLE_MODEL_TYPE]
                          .value,
                      )
                    }
                  />
                  <label htmlFor={`table_model_${key}`}>
                    {
                      TABLE_MODEL_TYPE[key as keyof typeof TABLE_MODEL_TYPE]
                        .label
                    }
                  </label>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
