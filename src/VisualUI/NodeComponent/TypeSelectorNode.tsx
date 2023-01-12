import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { shallow } from 'zustand/shallow'
import { GeometryType } from '../../@types'
import useStore from '../../store'
import NodeHeader from './../NodeHeader'

interface TypeNodeInterface {
  data: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: TypeNodeInterface) => {
  const [type, setType] = useStore((state) => [state.type, state.setType], shallow)
  const handleShapeTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.name as GeometryType)
  }
  return (
    <>
      <NodeHeader>{data.label}</NodeHeader>
      <div className="node_body">
        <input
          id="cube"
          className="nodrag"
          type="radio"
          name="cube"
          checked={type === 'cube'}
          onChange={handleShapeTypeChange}
          defaultValue={data.color}
        />
        <label htmlFor="cube">cube</label>
        <input
          id="pyramid"
          className="nodrag"
          type="radio"
          name="pyramid"
          checked={type === 'pyramid'}
          onChange={handleShapeTypeChange}
          defaultValue={data.color}
        />
        <label htmlFor="pyramid">pyramid</label>
      </div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </>
  )
})
