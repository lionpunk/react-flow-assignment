import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import useStore from '../store'
import NodeHeader from './NodeHeader'

interface ColorSelectorNodeInterface {
  data?: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: ColorSelectorNodeInterface) => {
  const { color, setColor } = useStore()
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
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
        <div style={{ display: 'flex', marginLeft: 8, alignItems: 'stretch' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 4,
              paddingRight: 4,
              backgroundColor: '#ECECEC',
              borderTopLeftRadius: 4,
              borderBottomLeftRadius: 4,
              border: '1px solid #DDDDDD',
            }}
          >
            select color
          </div>
          <input
            className="nodrag"
            value={color}
            type="color"
            onChange={handleColorChange}
            defaultValue={color}
            style={{ borderColor: '#DDD' }}
          />
        </div>
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
