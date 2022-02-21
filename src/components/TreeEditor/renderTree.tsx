import INode from './INode';
import TreeItem from '@mui/lab/TreeItem';
import {TreeItemProps} from '@mui/lab/TreeItem/TreeItem';

export default function renderTree(node: INode) {
	const {id, label} = node;
	const treeItemProps: TreeItemProps = {
		nodeId: id,
		label: label
	}
	return (
		<TreeItem key={id} {...treeItemProps}>
			{
				'children' in node
					? node.children.map(renderTree)
					: null
			}
		</TreeItem>
	)
}