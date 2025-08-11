/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import * as THREE from 'three'
import {type GLTF} from 'three-stdlib'

export type GLTFResult = GLTF & {
  nodes: {
    Plate: THREE.Mesh
    Legs01Left: THREE.Mesh
    Legs01Right: THREE.Mesh
    Legs02Left: THREE.Mesh
    Legs02Right: THREE.Mesh
    Legs03Left: THREE.Mesh
    Legs03Right: THREE.Mesh
  }
  materials: {
    Plate: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
  }
}

export const TABLE_MODEL_TYPE = {
  CLASSIC: {
    label: 'Classic',
    value: 'classic',
  },
  MODERN: {
    label: 'Modern',
    value: 'modern',
  },
  MINIMALISTIC: {
    label: 'Minimalistic',
    value: 'minimalistic',
  },
} as const

export type TableModel =
  (typeof TABLE_MODEL_TYPE)[keyof typeof TABLE_MODEL_TYPE]['value']
