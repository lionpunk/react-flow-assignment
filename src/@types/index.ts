import { ComponentType } from 'react'
import { Node, NodeProps } from 'reactflow'

export type NodeKeyTypes = 'main' | 'colorSelectorNode' | 'zoomSelectorNode' | 'typeSelectorNode' // This enables to give the types on type in initialNodes
export type CustomNodeTypes = {
  [key in NodeKeyTypes]?: ComponentType<NodeProps>
}
export type CustomNode = Node & { type?: NodeKeyTypes }
export type GeometryType = 'cube' | 'pyramid'
