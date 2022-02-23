import {Helmet} from 'react-helmet';
import {Box, CssBaseline, GlobalStyles, Grid, Typography} from '@mui/material';
import generateDataSample from '../../samples/tree-data/generateDataSample';
import ApplicationBar from '../ApplicationBar';
import TreeEditor from '../TreeEditor';
import {styles} from './globalStyles';
import TreeEditorModel from '../TreeEditor/model/TreeEditorModel';
import INode from '../TreeEditor/model/node/INode';

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