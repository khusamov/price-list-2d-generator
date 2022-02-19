import TreeView, {TreeViewProps} from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import renderTree from './renderTree';
import {data} from './data';

export default function TreeEditor() {
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