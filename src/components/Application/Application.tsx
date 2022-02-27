import {Typography} from '@mui/material';
import generateDataSample from '../../samples/tree-data/generateDataSample';
import TreeEditorModel from '../TreeEditor/model/TreeEditorModel';
import INode from '../TreeEditor/model/node/INode';
import TreeEditor from '../TreeEditor';
import ApplicationBar from './ApplicationBar';
import Node from '../TreeEditor/model/node/Node';
import ApplicationLayout from './ApplicationLayout';

const treeEditorModel: TreeEditorModel = new TreeEditorModel
treeEditorModel.data = generateDataSample()

const isExpandedNode = (verifiable: INode) => treeEditorModel.expandedNodes.find(node => node === verifiable)

export default function Application() {
	const onNodeToggle = (expandedNodes: INode[]) => {
		treeEditorModel.expandedNodes = expandedNodes
	}
	const onNodeSelect = (selectedNode: INode) => {
		treeEditorModel.selectedNode = selectedNode
	}

	const onTreeEditorAddButtonClick = () => {
		const parentNode = treeEditorModel.selectedNode ? treeEditorModel.selectedNode : treeEditorModel.data
		if (parentNode) {
			if (treeEditorModel.selectedNode && !isExpandedNode(treeEditorModel.selectedNode)) {
				treeEditorModel.expandedNodes.push(treeEditorModel.selectedNode)
			}
			const newNode = new Node
			parentNode.children.push(newNode)
			treeEditorModel.expandedNodes.push(newNode)
			treeEditorModel.selectedNode = newNode
		}
	}

	const onTreeEditorDeleteButtonClick = () => {
		if (treeEditorModel.selectedNode) {
			const parentNode = treeEditorModel.selectedNode.parent
			if (parentNode) {
				const deletedIndex = parentNode.children.indexOf(treeEditorModel.selectedNode)
				parentNode.children.splice(deletedIndex, 1)
				treeEditorModel.selectedNode = null
			}
		}
	}

	return (
		<ApplicationLayout>
			{{
				header: <ApplicationBar/>,
				content: (
					<TreeEditor
						model={treeEditorModel}
						onNodeToggle={onNodeToggle}
						onNodeSelect={onNodeSelect}
						onAdd={onTreeEditorAddButtonClick}
						onDelete={onTreeEditorDeleteButtonClick}
					/>
				),
				footer: (
					<Typography sx={{textAlign: 'center', padding: 1, color: 'white'}}>
						Павловский Посад, 2022 год
					</Typography>
				)
			}}
		</ApplicationLayout>
	)
}