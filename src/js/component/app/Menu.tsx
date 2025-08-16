/**
 * @description Menu
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'
import {
  TABLE_MODEL_COLOR,
  TABLE_MODEL_TYPE,
  type TableModelColor,
  type TableModelType,
} from '../../types'
import {Option} from './menu/Option.tsx'

interface Props {
  tableModelType: TableModelType
  tableModelColor: TableModelColor
  tableModelSize: number
  handleTableModelType: (tableModelType: TableModelType) => void
  handleTableModelColor: (tableModelColor: TableModelColor) => void
  handleTableModelSize: (tableModelSize: number) => void
}

export const Menu: React.FC<Props> = ({
  tableModelType,
  tableModelColor,
  tableModelSize,
  handleTableModelType,
  handleTableModelColor,
  handleTableModelSize,
}) => {
  return (
    <div className="fixed right-10 top-10 flex flex-col gap-6 p-8 text-sm rounded-2xl shadow-[black_0_0_1rem] text-secondary-600 bg-glass-100 backdrop-blur-lg hover:bg-glass-500 hover:text-secondary-900 transition-colors duration-500">
      <div>
        <h3 className="font-black uppercase mb-3">Model</h3>

        <ul className="flex flex-col gap-3">
          {Object.keys(TABLE_MODEL_TYPE).map((key) => {
            const modelType =
              TABLE_MODEL_TYPE[key as keyof typeof TABLE_MODEL_TYPE]
            return (
              <Option
                key={key}
                value={modelType['value']}
                label={modelType['label']}
                name="table_model_type"
                isChecked={tableModelType === modelType['value']}
                handleChange={() => handleTableModelType(modelType['value'])}
              />
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="font-black uppercase mb-3">Color</h3>

        <ul className="flex flex-col gap-3">
          {Object.keys(TABLE_MODEL_COLOR).map((key) => {
            const modelColor =
              TABLE_MODEL_COLOR[key as keyof typeof TABLE_MODEL_COLOR]
            return (
              <Option
                key={key}
                value={modelColor['value']}
                label={modelColor['label']}
                name="table_model_color"
                isChecked={tableModelColor === modelColor['value']}
                handleChange={() => handleTableModelColor(modelColor['value'])}
              />
            )
          })}
        </ul>
      </div>

      <div>
        <h3 className="font-black uppercase mb-3">Size</h3>

        <div className="flex flex-row gap-1 items-center">
          <input
            type="range"
            value={tableModelSize}
            min={1}
            max={3}
            step={1}
            id="table_model_size"
            onChange={(e) => handleTableModelSize(Number(e.target.value))}
          />
          <label htmlFor="table_model_size" className="text-xs">
            {tableModelSize}m
          </label>
        </div>
      </div>
    </div>
  )
}
