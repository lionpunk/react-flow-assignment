import { useCallback } from 'react'
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Edge,
  useEdgesState,
  useNodesState,
} from 'reactflow'

import MainNode from './MainNode'

import 'reactflow/dist/style.css'

import ColorSelecotorNode from './ColorSelecotorNode'
import './VisualUI.css'
import { CustomNode, CustomNodeTypes } from '../@types'
import ScaleSelectorNode from './ScaleSelectorNode'
import TypeSelectorNode from './TypeSelectorNode'

const initialNodes: CustomNode[] = [
  {
    id: '1',
    type: 'shapeSelectorNode',
    data: { label: 'SHAPE TYPE' },
    position: { x: 250, y: 5 },
  },
  {
    id: '2',
    type: 'colorSelectorNode',
    data: { label: 'shape color' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    type: 'zoomSelectorNode',
    data: { label: 'ZOOM LEVEL' },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    type: 'main',
    data: { label: 'Node 4' },
    position: { x: 400, y: 200 },
  },
]

const initialEdges: Edge[] = [
  { id: 'e1-4', source: '1', target: '4', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
]

const nodeTypes: CustomNodeTypes = {
  main: MainNode,
  colorSelectorNode: ColorSelecotorNode,
  zoomSelectorNode: ScaleSelectorNode,
  shapeSelectorNode: TypeSelectorNode,
}

console.log('node types ==>', nodeTypes)

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
