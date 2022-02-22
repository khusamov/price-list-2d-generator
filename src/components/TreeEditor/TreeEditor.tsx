import {SyntheticEvent, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Box, Button, Grid, TextField, Toolbar} from '@mui/material';
import TreeView, {TreeViewProps} from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import renderTree from './renderTree';
import INode from './node/INode';
import getAllNodes from '../../functions/getAllNodes';
import {InputProps as StandardInputProps} from '@mui/material/Input/Input';

interface ITreeEditor {
	data: INode
	expanded?: string[]
	onNodeToggle?: (event: SyntheticEvent, nodeIds: string[]) => void
}

export default observer(
	function TreeEditor({data, expanded, onNodeToggle}: ITreeEditor) {
		const [selectedNode, setSelectedNode] = useState<INode>()

		const onNodeSelect = (event: SyntheticEvent, nodeIds: string) => {
			const search = getAllNodes(data).filter(node => node.id === nodeIds)
			setSelectedNode(search[0])
		}

		const onTextFieldChange: StandardInputProps['onChange'] = event => {
			if (selectedNode) {
				selectedNode.label = event.target.value
			}
		}

		const treeViewProps: TreeViewProps = {
			selected: selectedNode?.id,
			expanded,
			onNodeToggle,
			onNodeSelect,
			defaultCollapseIcon: <ExpandMoreIcon/>,
			defaultExpandIcon: <ChevronRightIcon/>,
			sx: {flexGrow: 1}
		}

		return (
			<Grid container direction='column' wrap='nowrap' sx={{height: '100%'}}>
				<Grid item>
					<Toolbar>
						<Button variant='contained'>Добавить узел</Button>
					</Toolbar>
				</Grid>
				<Grid item container direction='row' wrap='nowrap' sx={{flexGrow: 1}}>
					<Grid item sx={{flexGrow: 1}}>
						<TreeView {...treeViewProps}>
							{renderTree(data)}
						</TreeView>
					</Grid>
					<Grid item>
						<Box sx={{width: 400}}>
							<TextField
								label='Название узла'
								value={selectedNode?.label}
								onChange={onTextFieldChange}
								sx={{width: '100%'}}
							/>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		)
	}
)

