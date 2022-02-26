import {ChangeEvent, SyntheticEvent} from 'react';
import {observer} from 'mobx-react-lite';
import {Button} from '@mui/material';
import TreeRenderer, {ITreeRendererProps} from './TreeRenderer';
import TreeEditorLayout from './TreeEditorLayout';
import NodeForm from './NodeForm';
import INode from './model/node/INode';
import TreeEditorModel from './model/TreeEditorModel';

interface ITreeEditor {
	model: TreeEditorModel
	onNodeToggle?: (expandedNodes: INode[]) => void
	onNodeSelect?: (selectedNode: INode) => void
	onNodeChange?: (changedNode: INode) => void
	onAdd?: () => void
}

export default observer(
	function TreeEditor({model, onNodeToggle, onNodeSelect, onAdd}: ITreeEditor) {
		if (!model.data) return null

		const {descendantOrSelf: allNodes} = model.data

		const onTreeRendererNodeToggle = (event: SyntheticEvent, nodeIds: string[]) => {
			if (onNodeToggle) {
				const expandedNodes = allNodes.filter(node => nodeIds.includes(node.id))
				onNodeToggle(expandedNodes)
			}
		}

		const onTreeRendererNodeSelect = (event: SyntheticEvent, nodeIds: string) => {
			if (onNodeSelect) {
				const selectedNodes = allNodes.filter(node => nodeIds === node.id)
				onNodeSelect(selectedNodes[0])
			}
		}

		const onLabelTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
			if (model.selectedNode) {
				model.selectedNode.label = event.target.value
			}
		}

		const onAddButtonClick = () => onAdd && onAdd()

		const treeRendererProps: ITreeRendererProps = {
			sx: {flexGrow: 1},
			data: model.data,
			treeViewProps: {
				selected: model.selectedNode?.id || '', // Пустую строку пришлось поставить, иначе Реакт
														// считает этот компонент неконтроллируемым.
				expanded: model.expandedNodes.map(node => node.id),
				onNodeToggle: onTreeRendererNodeToggle,
				onNodeSelect: onTreeRendererNodeSelect
			}
		}

		return (
			<TreeEditorLayout>
				{{
					toolbar: <Button variant='contained' onClick={onAddButtonClick}>Добавить узел</Button>,
					view: <TreeRenderer {...treeRendererProps}/>,
					form: model.selectedNode && <NodeForm node={model.selectedNode} onLabelTextFieldChange={onLabelTextFieldChange}/>
				}}
			</TreeEditorLayout>
		)
	}
)

