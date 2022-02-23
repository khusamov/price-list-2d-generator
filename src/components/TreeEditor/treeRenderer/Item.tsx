import INode from '../model/node/INode';
import {TreeItemProps} from '@mui/lab/TreeItem/TreeItem';
import TreeItem from '@mui/lab/TreeItem';
import Label from './Label';

interface IItemProps {
	node: INode
}

export default function Item({node}: IItemProps) {
	const {id, label} = node;
	const treeItemProps: TreeItemProps = {
		nodeId: id,
		label: <Label label={label}/>
	}
	return (
		<TreeItem key={id} {...treeItemProps}>
			{
				'children' in node
					? node.children.map(node => <Item node={node}/>)
					: null
			}
		</TreeItem>
	)
}