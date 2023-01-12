import { Canvas } from '@react-three/fiber'
import { memo } from 'react'
import { Handle, NodeProps, Position } from 'reactflow'
import Boxes from './Boxes'
import NodeHeader from './NodeHeader'

const MainNode = ({
  data,
  isConnectable,
  targetPosition = Position.Left,
  sourcePosition = Position.Right,
}: NodeProps) => {
  return (
    <>
      <Handle
        type="target"
        id="a"
        position={targetPosition}
        isConnectable={isConnectable}
        style={{ top: 50 }}
      />
      <Handle
        type="target"
        id="b"
        position={targetPosition}
        isConnectable={isConnectable}
        style={{ top: 80 }}
      />
      <Handle
        type="target"
        id="c"
        position={targetPosition}
        isConnectable={isConnectable}
        style={{ top: 110 }}
      />
      <NodeHeader>Out put</NodeHeader>
      <Canvas camera={{ zoom: 1 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Boxes />
      </Canvas>
    </>
  )
}

MainNode.displayName = 'MainNode'

export default memo(MainNode)
