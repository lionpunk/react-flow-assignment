import { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Edge,
  Position,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import MainNode from './MainNode'

import 'reactflow/dist/style.css'

import ColorSelectorNode from './NodeComponent/ColorSelectorNode'
import './VisualUI.css'
import { CustomNode, CustomNodeTypes } from '../@types'
import TypeSelectorNode from './NodeComponent/TypeSelectorNode'
import ZoomSelectorNode from './NodeComponent/ZoomSelectorNode'

const initialNodes: CustomNode[] = [
  {
    id: '1',
    type: 'typeSelectorNode', // type only accepts string defined NodeType types ex:  type NodeKeyTypes = 'main' | 'colorSelectorNode' | 'zoomSelectorNode' | 'typeSelectorNode'
    data: { label: 'SHAPE TYPE' },
    position: { x: 250, y: 100 },
  },
  {
    id: '2',
    type: 'colorSelectorNode',
    data: { label: 'SHAPE COLOR' },
    position: { x: 250, y: 300 },
  },
  {
    id: '3',
    type: 'zoomSelectorNode',
    data: { label: 'ZOOM LEVEL' },
    position: { x: 250, y: 500 },
  },
  {
    id: '4',
    type: 'main',
    data: { label: 'Node 4' },
    position: { x: 600, y: 250 },
    targetPosition: Position.Left,
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-4', source: '1', target: '4', targetHandle: 'a', animated: true },
  { id: 'e2-4', source: '2', target: '4', targetHandle: 'b', animated: true },
  { id: 'e3-4', source: '3', target: '4', targetHandle: 'c', animated: true },
]

const nodeTypes: CustomNodeTypes = {
  main: MainNode,
  colorSelectorNode: ColorSelectorNode,
  zoomSelectorNode: ZoomSelectorNode,
  typeSelectorNode: TypeSelectorNode,
}

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  )

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
    >
      <Background />
    </ReactFlow>
  )
}

export default BasicFlow
