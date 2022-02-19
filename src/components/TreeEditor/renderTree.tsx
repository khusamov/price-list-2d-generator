import IRenderTree from './IRenderTree';
import TreeItem from '@mui/lab/TreeItem';
import {TreeItemProps} from '@mui/lab/TreeItem/TreeItem';

export default function renderTree(nodes: IRenderTree) {
	const {id, name} = nodes;
	const treeItemProps: TreeItemProps = {
		nodeId: id,
		label: name
	}
	return (
		<TreeItem key={id} {...treeItemProps}>
			{
				Array.isArray(nodes.children)
					? nodes.children.map(renderTree)
					: null
			}
		</TreeItem>
	)
}