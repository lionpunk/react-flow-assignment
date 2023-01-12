import { ComponentType } from 'react'
import { Node, NodeProps } from 'reactflow'

export type nodeKeyTypes =
  | 'main'
  | 'colorSelectorNode'
  | 'input'
  | 'zoomSelectorNode'
  | 'shapeSelectorNode'
//TODO: move types to types folder
export type CustomNodeTypes = {
  [key in nodeKeyTypes]?: ComponentType<NodeProps>
}
export type CustomNode = Node & { type?: nodeKeyTypes }
export type GeometryType = 'cube' | 'pyramid'
