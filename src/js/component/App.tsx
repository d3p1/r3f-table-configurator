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
  type TableColor,
  type TableModel,
} from '../types'
import {Table} from './app/Table.tsx'

export const App = () => {
  const [tableModelType, setTableModelType] = useState<TableModel>(
    TABLE_MODEL_TYPE.CLASSIC.value,
  )
  const [tableModelColor, setTableModelColor] = useState<string>(
    TABLE_MODEL_COLOR[0],
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

      <div className="fixed right-10 top-10 flex flex-col gap-4 p-8 text-sm rounded-2xl shadow-[black_0_0_1rem] text-secondary-600 bg-glass-100 backdrop-blur-lg hover:bg-glass-500 hover:text-secondary-900 transition-colors duration-500">
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

        <div>
          <h3 className="font-black uppercase mb-3">Color</h3>

          <ul className="flex flex-col gap-3">
            {TABLE_MODEL_COLOR.map((color) => {
              return (
                <li key={color} className="flex flex-row gap-2 text-xs">
                  <input
                    type="radio"
                    name="table_color"
                    id={`table_color_${color}`}
                    value={color}
                    checked={tableModelColor === color}
                    onChange={() => setTableModelColor(color)}
                  />
                  <label htmlFor={`table_color_${color}`}>{color}</label>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}
