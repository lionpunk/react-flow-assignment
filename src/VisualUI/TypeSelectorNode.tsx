import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { GeometryType } from '../@types'
import useStore from '../store'
import NodeHeader from './NodeHeader'

interface ColorSelectorNodeInterface {
  data: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: ColorSelectorNodeInterface) => {
  const { type, setType } = useStore()
  const handleShapeTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setType(event.target.name as GeometryType)
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
