import TreeView, {TreeViewProps} from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import renderTree from './renderTree';
import INode from './INode';

interface ITreeEditor {
	data: INode
}

export default function TreeEditor({data}: ITreeEditor) {
	const treeViewProps: TreeViewProps = {
		defaultCollapseIcon: <ExpandMoreIcon/>,
		defaultExpandIcon: <ChevronRightIcon/>,
		defaultExpanded: ['root'],
		sx: {flexGrow: 1}
	}

	return (
		<TreeView {...treeViewProps}>
			{renderTree(data)}
		</TreeView>
	)
}