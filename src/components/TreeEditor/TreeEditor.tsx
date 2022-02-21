import {SyntheticEvent} from 'react';
import TreeView, {TreeViewProps} from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import renderTree from './renderTree';
import INode from './INode';

interface ITreeEditor {
	data: INode
	expanded?: string[]
	onNodeToggle?: (event: SyntheticEvent, nodeIds: string[]) => void
}

export default function TreeEditor({data, expanded, onNodeToggle}: ITreeEditor) {
	const treeViewProps: TreeViewProps = {
		expanded,
		onNodeToggle,
		defaultCollapseIcon: <ExpandMoreIcon/>,
		defaultExpandIcon: <ChevronRightIcon/>,
		sx: {flexGrow: 1}
	}

	return (
		<TreeView {...treeViewProps}>
			{renderTree(data)}
		</TreeView>
	)
}

