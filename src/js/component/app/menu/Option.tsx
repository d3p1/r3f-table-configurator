/**
 * @description Menu option
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as React from 'react'

interface Props {
  value: string
  label: string
  name: string
  isChecked: boolean
  handleChange: () => void
}

export const Option: React.FC<Props> = ({
  value,
  label,
  name,
  isChecked,
  handleChange,
}) => {
  return (
    <li key={value} className="flex flex-row gap-2 text-xs">
      <input
        type="radio"
        name={name}
        id={`${name}_${value}`}
        value={value}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={`${name}_${value}`}>{label}</label>
    </li>
  )
}
