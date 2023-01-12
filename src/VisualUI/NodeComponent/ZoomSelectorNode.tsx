import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import useStore from '../../store'
import { shallow } from 'zustand/shallow'
import NodeHeader from '../NodeHeader'

interface ZoomNodeInterface {
  data: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: ZoomNodeInterface) => {
  const [scale, setScale] = useStore((state) => [state.scale, state.setScale], shallow)
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScale(+event.target.value)
  }
  return (
    <>
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
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </>
  )
})
