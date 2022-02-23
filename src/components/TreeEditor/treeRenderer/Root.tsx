import INode from '../model/node/INode';
import TreeView, {TreeViewProps} from '@mui/lab/TreeView';
import Item from './Item';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {SxProps} from '@mui/system';
import {Theme} from '@mui/material/styles';

interface IRootProps {
	node: INode
	treeViewProps?: TreeViewProps
	sx?: SxProps<Theme>
}

export default function Root({node, treeViewProps, sx}: IRootProps) {
	treeViewProps = {
		...treeViewProps,
		defaultCollapseIcon: <ExpandMoreIcon/>,
		defaultExpandIcon: <ChevronRightIcon/>,
		sx
	}
	return (
		<TreeView {...treeViewProps}>
			<Item node={node}/>
		</TreeView>
	)
}