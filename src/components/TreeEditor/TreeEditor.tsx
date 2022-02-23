import {SyntheticEvent} from 'react';
import {observer} from 'mobx-react-lite';
import {Button} from '@mui/material';
import TreeRenderer, {ITreeRendererProps} from './treeRenderer/TreeRenderer';
import INode from './model/node/INode';
import TreeEditorModel from './model/TreeEditorModel';
import TreeEditorLayout from './TreeEditorLayout';
import NodeForm from './NodeForm';

interface ITreeEditor {
	model: TreeEditorModel
	onNodeToggle?: (expandedNodes: INode[]) => void
	onNodeSelect?: (selectedNode: INode) => void
}

export default observer(
	function TreeEditor({model, onNodeToggle, onNodeSelect}: ITreeEditor) {

		const {descendantOrSelf: allNodes} = model.data

		const treeRendererProps: ITreeRendererProps = {
			sx: {flexGrow: 1},
			data: model.data,
			treeViewProps: {
				selected: model.selectedNode?.id,
				expanded: model.expandedNodes.map(node => node.id),
				onNodeToggle: (event: SyntheticEvent, nodeIds: string[]) => {
					if (onNodeToggle) {
						const expandedNodes = allNodes.filter(node => nodeIds.includes(node.id))
						onNodeToggle(expandedNodes)
					}
				},
				onNodeSelect: (event: SyntheticEvent, nodeIds: string) => {
					if (onNodeSelect) {
						const selectedNodes = allNodes.filter(node => nodeIds === node.id)
						onNodeSelect(selectedNodes[0])
					}
				}
			}
		}

		return (
			<TreeEditorLayout>
				{{
					toolbar: <Button variant='contained'>Добавить узел</Button>,
					view: <TreeRenderer {...treeRendererProps}/>,
					form: model.selectedNode && <NodeForm node={model.selectedNode}/>
				}}
			</TreeEditorLayout>
		)
	}
)

