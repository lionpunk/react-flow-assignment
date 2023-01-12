import { create } from 'zustand'
import { GeometryType } from './@types'

export interface ParticleState {
  color: string
  setColor: (color: string) => void
  scale: number
  setScale: (scale: number) => void
  type: GeometryType
  setType: (type: GeometryType) => void
}

const useStore = create<ParticleState>((set, get) => ({
  color: '#ff0000',
  setColor: (color) => set((state) => ({ ...state, color })),
  scale: 0.5,
  setScale: (scale) => set((state) => ({ ...state, scale })),
  type: 'cube',
  setType: (type) => set((state) => ({ ...state, type })),
}))

export default useStore
