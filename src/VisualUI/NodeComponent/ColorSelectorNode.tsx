import React, { memo } from 'react'
import { Handle, Position } from 'reactflow'
import { shallow } from 'zustand/shallow'
import useStore from '../../store'
import NodeHeader from '../NodeHeader'

interface ColorNodeInterface {
  data?: any
  isConnectable?: boolean
}
export default memo(({ data, isConnectable }: ColorNodeInterface) => {
  const [color, setColor] = useStore((state) => [state.color, state.setColor], shallow)
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value)
  }
  return (
    <>
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
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} />
    </>
  )
})
