import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import { Canvas } from '@react-three/fiber'
// import { Box } from './Box'
import NodeHeader from './NodeHeader'
import Boxes from './Boxes'

const MainNode = ({
  data,
  isConnectable,
  targetPosition = Position.Top,
  sourcePosition = Position.Bottom,
}: NodeProps) => {
  return (
    <>
      <Handle type="target" position={targetPosition} isConnectable={isConnectable} />
      <NodeHeader>Out put</NodeHeader>
      <Canvas camera={{ zoom: 1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Boxes />
      </Canvas>
      <Handle type="source" position={sourcePosition} isConnectable={isConnectable} />
    </>
  )
}

MainNode.displayName = 'MainNode'

export default memo(MainNode)
