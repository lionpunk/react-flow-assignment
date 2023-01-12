import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BoxGeometry, MeshLambertMaterial, Object3D, TetrahedronGeometry } from 'three'
import useStore from '../store'

const tempBoxes = new Object3D()
/**
 * @dev hardcoded width and height value for test purpose
 */
const i = 20
const j = 20

/**
 *
 * @returns Particle component consists of much box or Tentrahedron Geometry
 */
const Boxes = () => {
  const { color, scale, type } = useStore()
  const material = new MeshLambertMaterial({ color: color })

  const boxesGeometry = useMemo(
    () => (type === 'cube' ? new BoxGeometry(1, 1, 1) : new TetrahedronGeometry(1, 0)),
    [type]
  )

  // initial matrix
  const posMatrix = useMemo(() => {
    let tempMatrix = []
    for (let x = 0; x < i; x++) {
      for (let z = 0; z < j; z++) {
        tempMatrix.push({
          x: i * Math.random() - i / 2,
          y: 30 * Math.random() - i / 2,
          z: 4 * Math.random() - 4 / 2,
        })
      }
    }
    return tempMatrix
  }, [])
  const ref = useRef<THREE.InstancedMesh>(null!)

  useFrame(({ clock }) => {
    const t = clock.oldTime * 0.001
    posMatrix.forEach((pos, index) => {
      const { x, y, z } = pos
      tempBoxes.position.set(x, y, z)
      tempBoxes.rotation.y = t + i
      tempBoxes.updateMatrix()
      ref.current?.setMatrixAt(index, tempBoxes.matrix)
    })
    ref.current.instanceMatrix.needsUpdate = true
  })

  return <instancedMesh ref={ref} args={[boxesGeometry, material, i * j]} scale={scale} />
}

export default Boxes
