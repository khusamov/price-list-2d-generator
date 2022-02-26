import {Helmet} from 'react-helmet';
import {Box, CssBaseline, GlobalStyles, Grid, Typography} from '@mui/material';
import generateDataSample from '../../samples/tree-data/generateDataSample';
import TreeEditorModel from '../TreeEditor/model/TreeEditorModel';
import INode from '../TreeEditor/model/node/INode';
import TreeEditor from '../TreeEditor';
import ApplicationBar from './ApplicationBar';
import {styles} from './globalStyles';
import Node from '../TreeEditor/model/node/Node';

const siteTitle = 'Генератор прайс-листов'

const treeEditorModel: TreeEditorModel = new TreeEditorModel
treeEditorModel.data = generateDataSample()

export default function Application() {
	const onNodeToggle = (expandedNodes: INode[]) => {
		treeEditorModel.expandedNodes = expandedNodes
	}
	const onNodeSelect = (selectedNode: INode) => {
		treeEditorModel.selectedNode = selectedNode
	}

	const isExpandedNode = (verifiable: INode) => treeEditorModel.expandedNodes.find(node => node === verifiable)

	const onTreeEditorAddButtonClick = () => {
		const parentNode = treeEditorModel.selectedNode ? treeEditorModel.selectedNode : treeEditorModel.data
		if (parentNode) {
			if (treeEditorModel.selectedNode && !isExpandedNode(treeEditorModel.selectedNode)) {
				treeEditorModel.expandedNodes.push(treeEditorModel.selectedNode)
			}
			const newNode = new Node('')
			parentNode.children.push(newNode)
			treeEditorModel.expandedNodes.push(newNode)
			treeEditorModel.selectedNode = newNode
		}
	}

	return (
		<Box sx={{height: '100%', flexGrow: 1}}>
			<CssBaseline/>
			<GlobalStyles styles={styles}/>
			<Helmet defaultTitle={siteTitle}/>
			<Grid container direction='column' wrap='nowrap' sx={{height: '100%'}}>
				<Grid item>
					<ApplicationBar/>
				</Grid>
				<Grid item container sx={{flexGrow: 1, overflow: 'auto'}}>
					<Box sx={{flexGrow: 1}}>
						<TreeEditor
							model={treeEditorModel}
							onNodeToggle={onNodeToggle}
							onNodeSelect={onNodeSelect}
							onAdd={onTreeEditorAddButtonClick}
						/>
					</Box>
				</Grid>
				<Grid item sx={{backgroundColor: 'gray'}}>
					<Typography sx={{textAlign: 'center', padding: 1, color: 'white'}}>
						Павловский Посад, 2022 год
					</Typography>
				</Grid>
			</Grid>
		</Box>
	)
}