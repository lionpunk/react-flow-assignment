import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import useStore from '../store'
import NodeHeader from './NodeHeader'

interface ColorSelectorNodeInterface {
  data: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: ColorSelectorNodeInterface) => {
  const { scale, setScale } = useStore()
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScale(+event.target.value)
  }
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#F00' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />

      <NodeHeader>{data.label}</NodeHeader>

      <div className="node_body">
        <input
          className="nodrag"
          type="range"
          min={0.5}
          max={5}
          value={scale}
          onChange={handleColorChange}
        />
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  )
})
