import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { BoxGeometry, MeshLambertMaterial, Object3D, TetrahedronGeometry } from 'three'
import useStore from '../store'

const tempBoxes = new Object3D()
const i = 20
const j = 20

const Boxes = () => {
  const { color, scale, type } = useStore()
  const material = new MeshLambertMaterial({ color: color })
  const boxesGeometry = useMemo(
    () => (type === 'cube' ? new BoxGeometry(1, 1, 1) : new TetrahedronGeometry(1, 0)),
    [type]
  )

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
    for (let ii = 0; ii < posMatrix.length; ii++) {
      let x = posMatrix[ii].x
      let y = posMatrix[ii].y
      let z = posMatrix[ii].z
      tempBoxes.position.set(x, y, z)
      tempBoxes.rotation.y = t + ii
      tempBoxes.updateMatrix()
      ref.current?.setMatrixAt(ii, tempBoxes.matrix)
    }
    ref.current.instanceMatrix.needsUpdate = true
  })

  return <instancedMesh ref={ref} args={[boxesGeometry, material, i * j]} scale={scale} />
}

export default Boxes
